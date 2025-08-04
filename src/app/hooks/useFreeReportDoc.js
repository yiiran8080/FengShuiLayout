// filepath: /Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/hooks/useFreeReportDoc.js
"use client";
import { useEffect, useState } from "react";
import { get, post } from "@/lib/ajax";
import _ from "lodash";
import getWuxingData from "@/lib/nayin";

export default function useFreeReportDoc(locale, userData) {
	const [loading, setLoading] = useState(true);
	const [reportDocData, setReportDocData] = useState(null);

	useEffect(() => {
		const loadFreeReport = async () => {
			if (userData && locale) {
				const birthDateTime = userData.birthDateTime;
				console.log("Generating free report for user:", userData);
				setLoading(true);

				try {
					// Get original data from API
					const { data: zhData } = await get(`/api/reportDoc/zh`, {
						isCached: true,
					});
					const { data: twData } = await get(`/api/reportDoc/tw`, {
						isCached: true,
					});

					if (zhData && twData) {
						const {
							nayin,
							year,
							month,
							day: date,
							hour,
						} = getWuxingData(birthDateTime);
						const random = Math.floor(Math.random() * 3);
						const jiajuRandom = Math.floor(Math.random() * 3);

						let zhReportData = {
							nianzhuData: zhData.nianzhuData[year][random],
							yuezhuData: zhData.yuezhuData[month][random],
							rizhuData: zhData.rizhuData[date][random],
							shizhuData: zhData.shizhuData[hour][random],
							yunchengData: zhData.yunchengData[nayin][random],
							jiajuData: getJiajuData(
								zhData.jiajuData,
								jiajuRandom
							),
						};

						let twReportData = {
							nianzhuData: twData.nianzhuData[year][random],
							yuezhuData: twData.yuezhuData[month][random],
							rizhuData: twData.rizhuData[date][random],
							shizhuData: twData.shizhuData[hour][random],
							yunchengData: twData.yunchengData[nayin][random],
							jiajuData: getJiajuData(
								twData.jiajuData,
								jiajuRandom
							),
						};

						const data =
							locale === "zh-CN" ? zhReportData : twReportData;
						setReportDocData(data);
						console.log("Free report generated:", data);
					}
				} catch (error) {
					console.error("Error generating free report:", error);
				}

				setLoading(false);
			}
		};

		loadFreeReport();
	}, [locale, userData]);

	const getJiajuData = (_jiajuData, random) => {
		if (_jiajuData) {
			let jiajuData = _.cloneDeep(_jiajuData);
			for (let key in jiajuData) {
				let room = jiajuData[key];
				for (let direction in room) {
					room[direction] = room[direction][random];
				}
			}
			return jiajuData;
		}
	};

	return { loading, reportDocData };
}
