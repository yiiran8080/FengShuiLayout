"use client";
import { useEffect, useState } from "react";
import { post } from "@/lib/ajax";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";
import { AntdSpin } from "antd-spin";
import {
	getSystemPrompt as getSystemPromptZh,
	getUserData as getUserDataZh,
} from "./utilsZh";
import {
	getSystemPrompt as getSystemPromptTw,
	getUserData as getUserDataTw,
} from "./utilsTw";
import { Line } from "@rc-component/progress";
import getWuxingData from "@/lib/nayin";
import useMobile from "@/app/hooks/useMobile";
import translate from "./translate";
export default function ({
	locale,
	userInfo,
	mingLiDataString,
	assistantDataString,
	onSaveData,
	isPrinting,
}) {
	const t = useTranslations("report.pro");
	const t2 = useTranslations("toast");
	const [mingLiData, setMingLiData] = useState({ mingpan: "" });
	const [activeKey, setActiveKey] = useState("mingpan");
	const [loading, setLoading] = useState(false);
	const [wuxingData, setWuxingData] = useState({});
	const [progress, setProgress] = useState(5);
	const isMobile = useMobile();
	const getSystemPrompt =
		locale === "zh-CN" ? getSystemPromptZh : getSystemPromptTw;
	const getUserData = locale === "zh-CN" ? getUserDataZh : getUserDataTw;
	useEffect(() => {
		let wuxingData = {};
		if (userInfo) {
			wuxingData = getWuxingData(userInfo.birthDateTime, userInfo.gender);
			setWuxingData(wuxingData);
		}
		if (userInfo && !userInfo.isLock && !mingLiDataString) {
			//只要没有数据就会重新生成
			onGenerate(userInfo, wuxingData);
		}
	}, [userInfo, mingLiDataString]);

	useEffect(() => {
		if (mingLiDataString) {
			const mingLiData = JSON.parse(mingLiDataString);
			setMingLiData(mingLiData);
		}
	}, [mingLiDataString]);

	const handleClick = (key) => {
		setActiveKey(key);
	};
	const onGenerate = (userInfo, _wuxingData) => {
		toast.info(
			t2(userInfo.genStatus === "done" ? "translating2" : "generating")
		);
		console.log("mingli gen");
		setProgress(0);
		let userData = getUserData(userInfo, _wuxingData || wuxingData);
		let transAssistantData = assistantDataString
			? JSON.parse(assistantDataString)
			: {};
		//这里的transAssistantData是另外一种语言的数据，提供给deepseek以提高两版语言的一致程度。
		let fix = userInfo.genStatus === "done" ? t("transfer") : "";
		const promises = [
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("mingpan"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.mingpan)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("minggong"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.minggong)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("liuqin"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.liuqin)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("shiye"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.shiye)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("jiankang"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.jiankang)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("ganqing"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.ganqing)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("renji"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.renji)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("juece"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.juece)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("gexing"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.gexing)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("yunshi"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.yunshi)
						: "",
			}),
			post("/api/generateCode", {
				user: userData,
				system: fix + getSystemPrompt("kaiyun"),
				assistant:
					userInfo.genStatus === "done"
						? JSON.stringify(transAssistantData.kaiyun)
						: "",
			}),
		];
		setLoading(true);
		createProgressivePromiseAll(promises)
			.then((results) => {
				setLoading(false);
				console.log("res 命理进阶", results);
				const newMingLiData = {
					...mingLiData,
					mingpan: results[0].data,
					minggong: results[1].data,
					liuqin: results[2].data,
					shiye: results[3].data,
					jiankang: results[4].data,
					ganqing: results[5].data,
					renji: results[6].data,
					juece: results[7].data,
					gexing: results[8].data,
					yunshi: results[9].data,
					kaiyun: results[10].data,
				};
				setMingLiData(newMingLiData);
				onSaveData(newMingLiData);
			})
			.catch((e) => {
				setLoading(false);
				toast.error(
					"个人命理进阶分析生成错误，请稍后刷新此页面重试。" +
						e.message,
					{ autoClose: false }
				);
			});
	};

	function createProgressivePromiseAll(promises) {
		const results = [];
		let completed = 0;
		const total = promises.length;

		return new Promise((resolve, reject) => {
			promises.forEach((promise, index) => {
				promise
					.then((result) => {
						if (result.status !== 0) {
							throw new Error(result.message);
						}
						results[index] = result;
						completed++;
						console.log("c", completed);
						const progress = completed / total;
						setProgress(progress * 100);
						//console.log(`Progress: ${progress * 100}%`); // 更新进度条
						if (completed === total) {
							resolve(results);
						}
					})
					.catch(reject); // 如果任何一个promise失败，则立即拒绝主promise
			});
		});
	}
	const RowFirst = (
		<>
			<div className="p-2  bg-[#F7FAF9] rounded-t-xl rounded-r-none  border-2 border-[#6CA698] flex items-center justify-center">
				<div
					style={
						activeKey === "mingpan"
							? {
									background:
										"linear-gradient(135deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
									color: "#fff",
								}
							: { backgroundColor: "#F7FAF9" }
					}
					className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
					onClick={() => handleClick("mingpan")}
				>
					{t("mingpan")}
				</div>
			</div>
			<div className="p-2  bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
				<div
					style={
						activeKey === "minggong"
							? {
									background:
										"linear-gradient(180deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
									color: "#fff",
								}
							: { backgroundColor: "#F7FAF9" }
					}
					className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
					onClick={() => handleClick("minggong")}
				>
					{t("minggong")}
				</div>
			</div>
			<div className="p-2  bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
				<div
					style={
						activeKey === "gexing"
							? {
									background:
										"linear-gradient(180deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
									color: "#fff",
								}
							: { backgroundColor: "#F7FAF9" }
					}
					className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
					onClick={() => handleClick("gexing")}
				>
					{t("gexing")}
				</div>
			</div>
			<div className="p-2 bg-[#F7FAF9] rounded-t-xl rounded-l-none  border-2 border-[#6CA698] flex items-center justify-center">
				<div
					style={
						activeKey === "yunshi"
							? {
									background:
										"linear-gradient(225deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
									color: "#fff",
								}
							: { backgroundColor: "#F7FAF9" }
					}
					className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
					onClick={() => handleClick("yunshi")}
				>
					{t("yunshi")}
				</div>
			</div>
		</>
	);
	const RowLast = (
		<>
			<div
				className="p-2 bg-[#F7FAF9] rounded-b-xl border-2 border-[#6CA698] flex items-center justify-center"
				style={{ borderBottomRightRadius: 0 }}
			>
				<div
					style={
						activeKey === "renji"
							? {
									background:
										"linear-gradient(45deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
									color: "#fff",
								}
							: { backgroundColor: "#F7FAF9" }
					}
					className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
					onClick={() => handleClick("renji")}
				>
					{t("renji")}
				</div>
			</div>
			<div className="p-2  bg-[#F7FAF9]   border-2 border-[#6CA698] flex items-center justify-center">
				<div
					style={
						activeKey === "juece"
							? {
									background:
										"linear-gradient(360deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
									color: "#fff",
								}
							: { backgroundColor: "#F7FAF9" }
					}
					className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
					onClick={() => handleClick("juece")}
				>
					{t("juece")}
				</div>
			</div>
			<div className="p-2  bg-[#F7FAF9]   border-2 border-[#6CA698] flex items-center justify-center">
				<div
					style={
						activeKey === "kaiyun"
							? {
									background:
										"linear-gradient(360deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
									color: "#fff",
								}
							: { backgroundColor: "#F7FAF9" }
					}
					className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
					onClick={() => handleClick("kaiyun")}
				>
					{t("kaiyun")}
				</div>
			</div>
			<div
				style={{ borderBottomLeftRadius: 0 }}
				className="bg-[#F7FAF9] border-2 border-[#6CA698] md:rounded-b-xl rounded-b-0 "
			></div>
		</>
	);
	return (
		<div className="relative">
			{loading && (
				<div className="absolute z-12 w-[80%] max-w-125 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
					<Line
						percent={progress}
						strokeWidth={2}
						strokeColor="#2db7f5"
						railWidth={2}
					/>{" "}
				</div>
			)}
			<AntdSpin
				size={"large"}
				spinning={loading}
				tip={t2(
					userInfo?.genStatus == "done"
						? "translating2"
						: "generating"
				)}
				className="bg-[#fff9]"
			>
				{/* <button onClick={() => { onGenerate(userInfo) }}>重新生成</button> */}
				{!isPrinting ? (
					<div>
						{isMobile ? (
							<div className="p-4 mx-auto">
								<div className="grid grid-cols-4 grid-rows-3 h-full border-4 border-[#6CA698] rounded-t-xl ">
									{/* 第一行 */}
									{RowFirst}
									{/* 第二行 */}
									<div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
										<div
											style={
												activeKey === "liuqin"
													? {
															background:
																"linear-gradient(90deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
															color: "#fff",
														}
													: {
															backgroundColor:
																"#F7FAF9",
														}
											}
											className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
											onClick={() =>
												handleClick("liuqin")
											}
										>
											{t("liuqin")}
										</div>
									</div>
									<div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
										<div
											style={
												activeKey === "shiye"
													? {
															background:
																"linear-gradient(270deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
															color: "#fff",
														}
													: {
															backgroundColor:
																"#F7FAF9",
														}
											}
											className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
											onClick={() => handleClick("shiye")}
										>
											{t("shiye")}
										</div>
									</div>
									<div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
										<div
											style={
												activeKey === "ganqing"
													? {
															background:
																"linear-gradient(90deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
															color: "#fff",
														}
													: {
															backgroundColor:
																"#F7FAF9",
														}
											}
											className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
											onClick={() =>
												handleClick("ganqing")
											}
										>
											{t("ganqing")}
										</div>
									</div>
									<div className="p-2  bg-[#F7FAF9]   border-2 border-[#6CA698] flex items-center justify-center">
										<div
											style={
												activeKey === "jiankang"
													? {
															background:
																"linear-gradient(270deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
															color: "#fff",
														}
													: {
															backgroundColor:
																"#F7FAF9",
														}
											}
											className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
											onClick={() =>
												handleClick("jiankang")
											}
										>
											{t("jiankang")}
										</div>
									</div>
									{/* 第三行 */}
									{RowLast}
								</div>
								<div className="text-sm whitespace-pre-wrap text-white overflow-y-auto rounded-b-xl  border-4 border-t-0  border-[#6CA698]   p-8  bg-[#066952CC]">
									{mingLiData[activeKey]}
								</div>
							</div>
						) : (
							<div className="mx-auto p-4 w-[952px] h-[608px]">
								<div className="grid grid-cols-4 grid-rows-4 h-full border-4 border-[#6CA698] rounded-2xl">
									{RowFirst}
									{/* 第二行 */}
									<div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
										<div
											style={
												activeKey === "liuqin"
													? {
															background:
																"linear-gradient(90deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
															color: "#fff",
														}
													: {
															backgroundColor:
																"#F7FAF9",
														}
											}
											className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
											onClick={() =>
												handleClick("liuqin")
											}
										>
											{t("liuqin")}
										</div>
									</div>
									{/* 中间合并区域 */}
									<div
										className="flex justify-center col-span-2 row-span-2 p-4 overflow-y-auto text-sm whitespace-pre-wrap border border-gray-300 font-boldtext-black"
										style={{
											background:
												"radial-gradient(circle,rgba(80, 236, 241, 0.95) 5%, #b9f52d 100%)",
										}}
									>
										{mingLiData[activeKey]}
									</div>
									<div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
										<div
											style={
												activeKey === "shiye"
													? {
															background:
																"linear-gradient(270deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
															color: "#fff",
														}
													: {
															backgroundColor:
																"#F7FAF9",
														}
											}
											className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
											onClick={() => handleClick("shiye")}
										>
											{t("shiye")}
										</div>
									</div>
									{/* 第三行 */}
									<div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
										<div
											style={
												activeKey === "ganqing"
													? {
															background:
																"linear-gradient(90deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
															color: "#fff",
														}
													: {
															backgroundColor:
																"#F7FAF9",
														}
											}
											className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
											onClick={() =>
												handleClick("ganqing")
											}
										>
											{t("ganqing")}
										</div>
									</div>
									{/* 中间区域已在上方定义 */}
									<div className="p-2  bg-[#F7FAF9]   border-2 border-[#6CA698] flex items-center justify-center">
										<div
											style={
												activeKey === "jiankang"
													? {
															background:
																"linear-gradient(270deg, #066952CC 0%,rgb(185, 245, 45) 80%)",
															color: "#fff",
														}
													: {
															backgroundColor:
																"#F7FAF9",
														}
											}
											className="flex items-center justify-center w-full h-full text-xl font-bold cursor-pointer hover:bg-gray-100"
											onClick={() =>
												handleClick("jiankang")
											}
										>
											{t("jiankang")}
										</div>
									</div>
									{/* 第四行 */}
									{RowLast}
								</div>
							</div>
						)}
					</div>
				) : (
					//以下是打印模式。全部展示。
					<div className="p-5 mx-auto bg-secondary rounded-2xl">
						{Object.entries(mingLiData).map(
							([tabKey, tabValue]) => {
								return (
									<div key={tabKey} className="mb-5">
										<p className="font-bold whitespace-nowrap text-primary">
											{t(tabKey)}：
										</p>
										<span className="whitespace-pre-wrap">
											{tabValue}
										</span>
									</div>
								);
							}
						)}
					</div>
				)}
			</AntdSpin>
		</div>
	);
}
