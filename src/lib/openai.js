// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: 'sk-ca3d9009ecfd451598228f994bc9d55d'
});

const system_prompt = ```
"jiajuData": {
    "bedroom": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "living_room": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "bathroom": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "kitchen": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "dining_room": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "study_room": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "balcony": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "storage_room": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    }
}
以上是用户提供给你一份json数据。里面涵盖了八种房间类型，这些房间类型下面分别对应了“中宫”、“正南”、“正北”、“正西”、“正东”、东北、东南、西南、西北这九种方位。请填充这个json数据中最内层数组中的内容，要求分别为每一种房间在其对应的方位给出方位特性、年度效应、化解重点、简评这四项内容，并把这四项内容放在一个对象中，作为四个键值对。例如：
bedroom.southWest所对应的数组中，你需要输出的其中一个json对象是：
{"方位特性"："2025年八白左辅星飞临西南方（坤宫），此星属「土」，為当运财星，主正财、事业稳健发展与不动产运势，尤其利于长期财富累积。 ",
"年度效应"："西南方本属坤土，与八白土星形成「土气叠加」格局，能强化财库能量，但需注意过旺土气可能导致思虑过重或肠胃不适。 ",
"化解重点"： "宜用色系：米黄、咖啡色系（呼应土元素，稳定财运），可搭配少量红色点缀（火生土，如床头灯或小面积装饰）。 \n忌用色系：绿色、青色（木剋土，易削弱财气），避免大面积植物摆放。 \n财位佈局：床头或橱柜靠西南方為佳，可放置方形陶瓷存钱筒或黄水晶（强化土气），忌杂物堆积阻塞财路。 \n健康提示：土气过盛时，建议每週𫔭窗通风，搭配白色床单调和（土生金，洩土转吉）。 ",
"简评"："此方位睡房有利职场晋升与储蓄运，但需保持空间简洁，避免土气僵滞。2025年可善用此处能量制定理财计划，睡前阅读财经书籍更能引动吉气。"
}

 每一种方位需要生成3个这样的对象，放在最内层的数组中。内容长度不能过于简略，应与我提供的示例尽可能一致。
```

const user_prompt = ```
"jiajuData": {
    "bedroom": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "living_room": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "bathroom": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "kitchen": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "dining_room": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "study_room": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "balcony": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    },
    "storage_room": {
        "center": [],
            "east": [],
                "southEast": [],
                    "south": [],
                        "southWest": [],
                            "west": [],
                                "northWest": [],
                                    "north": [],
                                        "northEast": []
    }
}
```
export default async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: system_prompt }, { role: "user", content: user_prompt }],
        model: "deepseek-chat",
        response_format: {
            'type': 'json_object'
        }
    });

    console.log(completion.choices[0].message.content);
}

main();