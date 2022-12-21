const emotions = [
	{
		val: "happy",
		nodes: [
			{
				val: "optimistic",
				nodes: [
					{
						val: "inspired",
						nodes: null,
					},
					{
						val: "hopeful",
						nodes: null,
					},
				],
			},
			{
				val: "trusting",
				nodes: [
					{
						val: "intimate",
						nodes: null,
					},
					{
						val: "sensitive",
						nodes: null,
					},
				],
			},
			{
				val: "peaceful",
				nodes: [
					{
						val: "thankful",
						nodes: null,
					},
					{
						val: "loving",
						nodes: null,
					},
				],
			},
			{
				val: "powerful",
				nodes: [
					{
						val: "creative",
						nodes: null,
					},
					{
						val: "courageous",
						nodes: null,
					},
				],
			},
			{
				val: "accepted",
				nodes: [
					{
						val: "valued",
						nodes: null,
					},
					{
						val: "respected",
						nodes: null,
					},
				],
			},
			{
				val: "proud",
				nodes: [
					{
						val: "confident",
						nodes: null,
					},
					{
						val: "successful",
						nodes: null,
					},
				],
			},
			{
				val: "interested",
				nodes: [
					{
						val: "inquisitive",
						nodes: null,
					},
					{
						val: "curious",
						nodes: null,
					},
				],
			},
			{
				val: "content",
				nodes: [
					{
						val: "joyful",
						nodes: null,
					},
					{
						val: "free",
						nodes: null,
					},
				],
			},
			{
				val: "playful",
				nodes: [
					{
						val: "cheeky",
						nodes: null,
					},
					{
						val: "aroused",
						nodes: null,
					},
				],
			},
		],
	},
	{
		val: "angry",
		nodes: [
			{
				val: "critical",
				nodes: [
					{
						val: "dismissive",
						nodes: null,
					},
					{
						val: "skeptical",
						nodes: null,
					},
				],
			},
			{
				val: "distant",
				nodes: [
					{
						val: "numb",
						nodes: null,
					},
					{
						val: "withdrawn",
						nodes: null,
					},
				],
			},
			{
				val: "frustrated",
				nodes: [
					{
						val: "annoyed",
						nodes: null,
					},
					{
						val: "infuriated",
						nodes: null,
					},
				],
			},
			{
				val: "aggressive",
				nodes: [
					{
						val: "hostile",
						nodes: null,
					},
					{
						val: "provoked",
						nodes: null,
					},
				],
			},
			{
				val: "mad",
				nodes: [
					{
						val: "jealous",
						nodes: null,
					},
					{
						val: "furious",
						nodes: null,
					},
				],
			},
			{
				val: "bitter",
				nodes: [
					{
						val: "violated",
						nodes: null,
					},
					{
						val: "indignant",
						nodes: null,
					},
				],
			},
			{
				val: "humiliated",
				nodes: [
					{
						val: "ridiculed",
						nodes: null,
					},
					{
						val: "disrespected",
						nodes: null,
					},
				],
			},
			{
				val: "let down",
				nodes: [
					{
						val: "resentful",
						nodes: null,
					},
					{
						val: "betrayed",
						nodes: null,
					},
				],
			},
		],
	},
	{
		val: "sad",
		nodes: [
			{
				val: "lonely",
				nodes: [
					{
						val: "isolated",
						nodes: null,
					},
					{
						val: "abandoned",
						nodes: null,
					},
				],
			},
			{
				val: "vulnerable",
				nodes: [
					{
						val: "victimized",
						nodes: null,
					},
					{
						val: "fragile",
						nodes: null,
					},
				],
			},
			{
				val: "despair",
				nodes: [
					{
						val: "grief",
						nodes: null,
					},
					{
						val: "powerless",
						nodes: null,
					},
				],
			},
			{
				val: "guilty",
				nodes: [
					{
						val: "ashamed",
						nodes: null,
					},
					{
						val: "remorseful",
						nodes: null,
					},
				],
			},
			{
				val: "depressed",
				nodes: [
					{
						val: "empty",
						nodes: null,
					},
					{
						val: "inferior",
						nodes: null,
					},
				],
			},
			{
				val: "hurt",
				nodes: [
					{
						val: "disappointed",
						nodes: null,
					},
					{
						val: "embarassed",
						nodes: null,
					},
				],
			},
		],
	},
	{
		val: "fearful",
		nodes: [
			{
				val: "scared",
				nodes: [
					{
						val: "helpless",
						nodes: null,
					},
					{
						val: "frightened",
						nodes: null,
					},
				],
			},
			{
				val: "anxious",
				nodes: [
					{
						val: "overwhelmed",
						nodes: null,
					},
					{
						val: "worried",
						nodes: null,
					},
				],
			},
			{
				val: "insecure",
				nodes: [
					{
						val: "inadequate",
						nodes: null,
					},
					{
						val: "inferior",
						nodes: null,
					},
				],
			},
			{
				val: "weak",
				nodes: [
					{
						val: "worthless",
						nodes: null,
					},
					{
						val: "insignificant",
						nodes: null,
					},
				],
			},
			{
				val: "rejected",
				nodes: [
					{
						val: "excluded",
						nodes: null,
					},
					{
						val: "persecuted",
						nodes: null,
					},
				],
			},
			{
				val: "threatened",
				nodes: [
					{
						val: "nervous",
						nodes: null,
					},
					{
						val: "exposed",
						nodes: null,
					},
				],
			},
		],
	},
	{
		val: "surprised",
		nodes: [
			{
				val: "startled",
				nodes: [
					{
						val: "shocked",
						nodes: null,
					},
					{
						val: "dismayed",
						nodes: null,
					},
				],
			},
			{
				val: "confused",
				nodes: [
					{
						val: "disillusioned",
						nodes: null,
					},
					{
						val: "perplexed",
						nodes: null,
					},
				],
			},
			{
				val: "amazed",
				nodes: [
					{
						val: "astonished",
						nodes: null,
					},
					{
						val: "awe",
						nodes: null,
					},
				],
			},
			{
				val: "excited",
				nodes: [
					{
						val: "eager",
						nodes: null,
					},
					{
						val: "energetic",
						nodes: null,
					},
				],
			},
		],
	},
	{
		val: "disgusted",
		nodes: [
			{
				val: "disapproving",
				nodes: [
					{
						val: "judgemental",
						nodes: null,
					},
					{
						val: "embarassed",
						nodes: null,
					},
				],
			},
			{
				val: "disappointed",
				nodes: [
					{
						val: "appalled",
						nodes: null,
					},
					{
						val: "revolted",
						nodes: null,
					},
				],
			},
			{
				val: "awful",
				nodes: [
					{
						val: "nauseated",
						nodes: null,
					},
					{
						val: "detestable",
						nodes: null,
					},
				],
			},
			{
				val: "repelled",
				nodes: [
					{
						val: "horified",
						nodes: null,
					},
					{
						val: "hesitant",
						nodes: null,
					},
				],
			},
		],
	},
	{
		val: "bad",
		nodes: [
			{
				val: "bored",
				nodes: [
					{
						val: "indifferent",
						nodes: null,
					},
					{
						val: "apathetic",
						nodes: null,
					},
				],
			},
			{
				val: "busy",
				nodes: [
					{
						val: "pressured",
						nodes: null,
					},
					{
						val: "rushed",
						nodes: null,
					},
				],
			},
			{
				val: "stressed",
				nodes: [
					{
						val: "overwhelmed",
						nodes: null,
					},
					{
						val: "out of control",
						nodes: null,
					},
				],
			},
			{
				val: "tired",
				nodes: [
					{
						val: "sleepy",
						nodes: null,
					},
					{
						val: "unfocused",
						nodes: null,
					},
				],
			},
		],
	},
];

export default emotions;
