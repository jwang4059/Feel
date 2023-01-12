const emotions = {
	word: "emotions",
	definition: null,
	map: {
		happy: {
			word: "happy",
			definition: "feeling or showing pleasure or contentment",
			map: {
				optimistic: {
					word: "optimistic",
					definition: "hopeful and confident about the future",
					map: {
						inspired: {
							word: "inspired",
							definition:
								"of extraordinary quality, as if arising from external creative impulse",
							map: null,
						},
						hopeful: {
							word: "hopeful",
							definition: "feeling or inspiring optimism about a future event",
							map: null,
						},
					},
				},
				trusting: {
					word: "trusting",
					definition:
						"showing or tending to have a belief in a person's honesty. or sincerity; not suspicious",
					map: {
						intimate: {
							word: "intimate",
							definition: "closely aquainted; familiar, close",
							map: null,
						},
						sensitive: {
							word: "sensitive",
							definition:
								"having or displaying a quick and delicate appreciation of other's feelings",
							map: null,
						},
					},
				},
				peaceful: {
					word: "peaceful",
					definition: "free from disturbance; tranquil",
					map: {
						thankful: {
							word: "thankful",
							definition: "expressing gratitude and relief",
							map: null,
						},
						loving: {
							word: "loving",
							definition: "feeling or showing love or great care",
							map: null,
						},
					},
				},
				powerful: {
					word: "powerful",
					definition: "having control and influence over people and events",
					map: {
						creative: {
							word: "creative",
							definition:
								"relating to or involving the imagination or original ideas, especially in the production of an artistic work",
							map: null,
						},
						courageous: {
							word: "courageous",
							definition: "not deterred by danger or pain; brave",
							map: null,
						},
					},
				},
				accepted: {
					word: "accepted",
					definition: "generally believed or recognized to be valid or correct",
					map: {
						valued: {
							word: "valued",
							definition: "considered to be important or beneficial; cherished",
							map: null,
						},
						respected: {
							word: "admire (someone or something) deeply, as a result of their abilities, qualities, or achievements",
							definition: "",
							map: null,
						},
					},
				},
				proud: {
					word: "proud",
					definition:
						"feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions or those of someone with whom one is closely associated",
					map: {
						confident: {
							word: "confident",
							definition:
								"feeling or showing confidence in oneself; self-assured",
							map: null,
						},
						successful: {
							word: "successful",
							definition: "accomplishing an aim or purpose",
							map: null,
						},
					},
				},
				interested: {
					word: "interested",
					definition:
						"showing curiosity or concern about something or someone; having a feeling of interest",
					map: {
						inquisitive: {
							word: "curious or inquiring",
							definition: "",
							map: null,
						},
						curious: {
							word: "curious",
							definition: "eager to know or learn something",
							map: null,
						},
					},
				},
				content: {
					word: "content",
					definition: "in a state of peaceful happiness",
					map: {
						joyful: {
							word: "joyful",
							definition:
								"feeling, expressing, or causing great pleasure and happiness",
							map: null,
						},
						free: {
							word: "free",
							definition:
								"not under the control or in the power of another; able to act or be done as one wishes",
							map: null,
						},
					},
				},
				playful: {
					word: "playful",
					definition: "fond of games and amusement; lighthearted",
					map: {
						cheeky: {
							word: "cheeky",
							definition:
								"impudent or irreverent, typically in an endearing or amusing way",
							map: null,
						},
						aroused: {
							word: "aroused",
							definition: "excite (someone) sexually",
							map: null,
						},
					},
				},
			},
		},
		angry: {
			word: "angry",
			definition:
				"feeling or showing strong annoyance, displeasure, or hostility; full of anger",
			map: {
				critical: {
					word: "critical",
					definition:
						"expressing adverse or disapproving comments or judgements",
					map: {
						dismissive: {
							word: "dismissive",
							definition:
								"feeling or showing that something is unworthy of consideration",
							map: null,
						},
						skeptical: {
							word: "skeptical",
							definition: "not easily convinced; having doubts or reservations",
							map: null,
						},
					},
				},
				distant: {
					word: "distant",
					definition: "(of a person) not intimate; cool or reserved",
					map: {
						numb: {
							word: "numb",
							definition: "deprived of the power of sensation",
							map: null,
						},
						withdrawn: {
							word: "withdrawn",
							definition: "not wanting to communicate with other people",
							map: null,
						},
					},
				},
				frustrated: {
					word: "frustrated",
					definition:
						"feeling or expressing distress and annoyance, especially because of inability to change or achieve something",
					map: {
						annoyed: {
							word: "slightly angry; irritated",
							definition: "",
							map: null,
						},
						infuriated: {
							word: "make (someone) extremely angry and impatient",
							definition: "",
							map: null,
						},
					},
				},
				aggressive: {
					word: "aggresive",
					definition:
						"ready or likely to attack or confront; characterized by or resulting from aggression",
					map: {
						hostile: {
							word: "hostile",
							definition: "unfriendly; antagonistic",
							map: null,
						},
						provoked: {
							word: "provoked",
							definition:
								"stimulate or give rise to (a reaction or emotion, typically a strong or unwelcome one) in someone",
							map: null,
						},
					},
				},
				mad: {
					word: "mad",
					definition: "very angry",
					map: {
						jealous: {
							word: "feeling or showing envy of someone or their achievements and advantages",
							definition: "",
							map: null,
						},
						furious: {
							word: "extremely angry",
							definition: "",
							map: null,
						},
					},
				},
				bitter: {
					word: "bitter",
					definition:
						"(of people or their feelings or behavior) angry, hurt, or resentful because of one's bad experiences or a sense of unjust treatment",
					map: {
						violated: {
							word: "violated",
							definition:
								"break or fail to comply with (a rule or formal agreement)",
							map: null,
						},
						indignant: {
							word: "indignant",
							definition:
								"feeling or showing anger or annoyance at what is perceived as unfair treatment",
							map: null,
						},
					},
				},
				humiliated: {
					word: "humiliated",
					definition:
						"make (someone) feel ashamed and foolish by injuring their dignity and self-respect, especially publicly",
					map: {
						ridiculed: {
							word: "ridiculed",
							definition:
								"subject (someone or something) to comptemptuous and dismissive language or behavior",
							map: null,
						},
						disrespected: {
							word: "disrespected",
							definition: "show a lack of respect for; insult",
							map: null,
						},
					},
				},
				"let down": {
					word: "let down",
					definition:
						"fail to support or help someone as they had hoped or expected",
					map: {
						resentful: {
							word: "resentful",
							definition:
								"feeling or expressing bitterness or indignation at having been treated unfairly",
							map: null,
						},
						betrayed: {
							word: "betrayed",
							definition: "be disloyal to",
							map: null,
						},
					},
				},
			},
		},
		sad: {
			word: "sad",
			definition: "feeling or showing sorrow; unhappy",
			map: {
				lonely: {
					word: "lonely",
					definition: "sad because one has no friends or company",
					map: {
						isolated: {
							word: "isolated",
							definition:
								"having minimal contact or little in common with others",
							map: null,
						},
						abandoned: {
							word: "abandoned",
							definition: "having been deserted or cast off",
							map: null,
						},
					},
				},
				vulnerable: {
					word: "vulnerable",
					definition:
						"(of a person) in need of special care, support, or protection because of age, disability, or risk of abuse or neglect",
					map: {
						victimized: {
							word: "victimized",
							definition: "single (someone) out for cruel or unjust treatment",
							map: null,
						},
						fragile: {
							word: "fragile",
							definition:
								"(of a person) not strong or sturdy; delicate and vulnerable",
							map: null,
						},
					},
				},
				despair: {
					word: "despair",
					definition: "the complete loss or absence of hope",
					map: {
						grief: {
							word: "grief",
							definition:
								"deep sorrow, especially that caused by someone's death",
							map: null,
						},
						powerless: {
							word: "powerless",
							definition: "without ability, influence, or power",
							map: null,
						},
					},
				},
				guilty: {
					word: "guilty",
					definition: "culpable of or responsible for a specified wrongdoing",
					map: {
						ashamed: {
							word: "ashamed",
							definition:
								"embarassed or guilty because of one's actions, characteristics, or associations",
							map: null,
						},
						remorseful: {
							word: "remorseful",
							definition: "filled with remorse; sorry",
							map: null,
						},
					},
				},
				hurt: {
					word: "hurt",
					definition: "distressed or offended by another person's behavior",
					map: {
						embarassed: {
							word: "embarassed",
							definition: "feeling or showing embarassment",
							map: null,
						},
						disappointed: {
							word: "disappointed",
							definition:
								"(of a person) sad or displeased because someone or something has failed to fulfill one's hopes or expectations",
							map: null,
						},
					},
				},
				depressed: {
					word: "depressed",
					definition:
						"(of a person) in a state of general unhappiness or despondency",
					map: {
						inferior: {
							word: "inferior",
							definition: "lower in rank, status, or quality",
							map: null,
						},
						empty: {
							word: "empty",
							definition: "having no value or purpose",
							map: null,
						},
					},
				},
			},
		},
		fearful: {
			word: "fearful",
			definition: "feeling afraid; showing fear or anxiety",
			map: {
				scared: {
					word: "scared",
					definition: "fearful; frightened",
					map: {
						helpless: {
							word: "helpless",
							definition: "unable to defend oneself or to act without help",
							map: null,
						},
						frightened: {
							word: "frightenedd",
							definition: "afraid or anxious",
							map: null,
						},
					},
				},
				anxious: {
					word: "anxious",
					definition:
						"experiencing worry, unease, or nervousness, typically about an imminent event or something with an uncertain outcome",
					map: {
						overwhelmed: {
							word: "overwhelmed",
							definition: "bury or drown beneath a huge mass",
							map: null,
						},
						worried: {
							word: "worried",
							definition:
								"anxious or troubled about actual or potential problems",
							map: null,
						},
					},
				},
				insecure: {
					word: "insecure",
					definition:
						"(of a person) not confident or assured; uncertain and anxious",
					map: {
						inadequate: {
							word: "inadequate",
							definition:
								"(of a person) unable to deal with a situation or with life",
							map: null,
						},
						inferior: {
							word: "inferior",
							definition: "lower in rank, status, or quality",
							map: null,
						},
					},
				},
				weak: {
					word: "weak",
					definition:
						"lacking the power to perform physically demanding tasks; lacking physical strength and energy",
					map: {
						worthless: {
							word: "worthless",
							definition:
								"(of a person) having no good qualities; deserving contempt",
							map: null,
						},
						insignificant: {
							word: "insignificant",
							definition: "(of a person) without power or influence",
							map: null,
						},
					},
				},
				rejected: {
					word: "rejected",
					definition:
						"dismiss as inadequate, inappropriate, or not to one's taste",
					map: {
						excluded: {
							word: "excluded",
							definition:
								"deny (someone) access to or bar (someone) from a place, group, or privilege",
							map: null,
						},
						persecuted: {
							word: "persecuted",
							definition:
								"subject (someone) to hospitality and ill-treatment, especially because of their ethnicity, religion, or sexual orientation or their political beliefs",
							map: null,
						},
					},
				},
				threatened: {
					word: "threatened",
					definition:
						"state one's intention to take hostile action against someone in retribution for something done or not done",
					map: {
						nervous: {
							word: "nervous",
							definition:
								"easily agitated or alarmed; tending to be anxious; highly strung",
							map: null,
						},
						exposed: {
							word: "exposed",
							definition: "in a vulnerable position or situation",
							map: null,
						},
					},
				},
			},
		},
		surprised: {
			word: "surprised",
			definition: "feeling or showing surprise",
			map: {
				startled: {
					word: "startled",
					definition: "feeling or showing sudden shock or alarm",
					map: {
						shocked: {
							word: "shocked",
							definition: "surprised and upset",
							map: null,
						},
						dismayed: {
							word: "dismayed",
							definition: "cause (someone) to feel consternation and distress",
							map: null,
						},
					},
				},
				confused: {
					word: "confued",
					definition: "(of a person) unable to think clearly; bewildered",
					map: {
						disillusioned: {
							word: "disillusioned",
							definition:
								"disappointed in someone or something that one discovers to be less good than one had believed",
							map: null,
						},
						perplexed: {
							word: "perplexed",
							definition: "completely baffled; very puzzled",
							map: null,
						},
					},
				},
				amazed: {
					word: "amazed",
					definition: "greatly surprised; astonished",
					map: {
						astonished: {
							word: "astonished",
							definition: "greatly surprised or impressed; amazed",
							map: null,
						},
						awe: {
							word: "awe",
							definition:
								"a feeling of reverential respect mixed with fear or wonder",
							map: null,
						},
					},
				},
				excited: {
					word: "excited",
					definition: "very enthusiastic and eager",
					map: {
						eager: {
							word: "eager",
							definition:
								"(of a person) wanting to do or have something very much",
							map: null,
						},
						energetic: {
							word: "energetic",
							definition: "showing or involving great activity or vitality",
							map: null,
						},
					},
				},
			},
		},
		disgusted: {
			word: "disgusted",
			definition: "feeling or expressing revulsion or strong disapproval",
			map: {
				disapproving: {
					word: "disapproving",
					definition: "expressing an unfavorable opinion",
					map: {
						judgemental: {
							word: "judgemental",
							definition:
								"having or displaying and excessively critical point of view",
							map: null,
						},
						embarassed: {
							word: "embarassed",
							definition: "feeling or showing embarassment",
							map: null,
						},
					},
				},
				disappointed: {
					word: "disappointed",
					definition:
						"(of a person) sad or displeased because someone or something has failed to fulfill one's hopes or expectations",
					map: {
						appalled: {
							word: "appalled",
							definition: "greatly dismayed or horrified",
							map: null,
						},
						revolted: {
							word: "revolted",
							definition: "disgusted",
							map: null,
						},
					},
				},
				awful: {
					word: "awful",
					definition: "very bad or unpleasant",
					map: {
						nauseated: {
							word: "nauseated",
							definition: "make (someone) feel sick; affected with nausea",
							map: null,
						},
						detestable: {
							word: "detestable",
							definition: "deserving intense dislike",
							map: null,
						},
					},
				},
				repelled: {
					word: "repelled",
					definition: "be repulsive or distasteful to",
					map: {
						horrified: {
							word: "horrified",
							definition: "filled with horror; extremely shocked",
							map: null,
						},
						hesitant: {
							word: "hesitant",
							definition: "tentative, unsure, or slow in acting or speaking",
							map: null,
						},
					},
				},
			},
		},
		bad: {
			word: "bad",
			definition:
				"not such as to be hoped for or desired; unpleasant or unwelcome",
			map: {
				bored: {
					word: "bored",
					definition:
						"feeling weary because one is unoccupied or lacks interest in one's current activity",
					map: {
						indifferent: {
							word: "indifferent",
							definition:
								"having no particular interest or sympathy; unconcerned",
							map: null,
						},
						apathetic: {
							word: "apathetic",
							definition:
								"showing or feeling no interest, enthusiasm, or concern",
							map: null,
						},
					},
				},
				busy: {
					word: "busy",
					definition: "having a great deal to do",
					map: {
						pressured: {
							word: "pressured",
							definition:
								"attempt to persuade or coerce (someone) into doing something",
							map: null,
						},
						rushed: {
							word: "rushed",
							definition: "(of a person) short of time; hurrying",
							map: null,
						},
					},
				},
				stressed: {
					word: "stressed",
					definition: "experiencing mental or emotional strain or tension",
					map: {
						overwhelmed: {
							word: "overwhelmed",
							definition: "bury or drown beneath a huge mass",
							map: null,
						},
						"out of control": {
							word: "out of control",
							definition: "no longer possible to manage",
							map: null,
						},
					},
				},
				tired: {
					word: "tired",
					definition: "in need of sleep or rest; weary",
					map: {
						sleepy: {
							word: "sleepy",
							definition: "needing or ready for sleep",
							map: null,
						},
						unfocused: {
							word: "unfocused",
							definition:
								"(of a person or their eyes) not seeing clearly; appearing glazed or expressionless",
							map: null,
						},
					},
				},
			},
		},
	},
};

export default emotions;
