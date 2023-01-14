export interface Emotion {
	word: string | null;
	partOfSpeech: "adjective" | "noun" | "verb" | null;
	definition: string | null;
	map: {
		[key: string]: Emotion;
	} | null;
}

export interface EmotionMap {
	[key: string]: Emotion;
}

const emotions: Emotion = {
	word: "emotions",
	partOfSpeech: null,
	definition: null,
	map: {
		happy: {
			word: "happy",
			partOfSpeech: "adjective",
			definition: "feeling or showing pleasure or contentment",
			map: {
				optimistic: {
					word: "optimistic",
					partOfSpeech: "adjective",
					definition: "hopeful and confident about the future",
					map: {
						inspired: {
							word: "inspired",
							partOfSpeech: "adjective",
							definition:
								"aroused, animated, or imbued with the spirit to do something, by or as if it by supernatural or divine influence",
							map: null,
						},
						hopeful: {
							word: "hopeful",
							partOfSpeech: "adjective",
							definition: "feeling or inspiring optimism about a future event",
							map: null,
						},
					},
				},
				trusting: {
					word: "trusting",
					partOfSpeech: "adjective",
					definition:
						"showing or tending to have a belief in a person's honesty. or sincerity; not suspicious",
					map: {
						intimate: {
							word: "intimate",
							partOfSpeech: "adjective",
							definition: "closely aquainted; familiar, close",
							map: null,
						},
						sensitive: {
							word: "sensitive",
							partOfSpeech: "adjective",
							definition:
								"having or displaying a quick and delicate appreciation of other's feelings",
							map: null,
						},
					},
				},
				peaceful: {
					word: "peaceful",
					partOfSpeech: "adjective",
					definition: "free from disturbance; tranquil",
					map: {
						thankful: {
							word: "thankful",
							partOfSpeech: "adjective",
							definition: "expressing gratitude and relief",
							map: null,
						},
						loving: {
							word: "loving",
							partOfSpeech: "adjective",
							definition: "feeling or showing love or great care",
							map: null,
						},
					},
				},
				powerful: {
					word: "powerful",
					partOfSpeech: "adjective",
					definition: "having control and influence over people and events",
					map: {
						creative: {
							word: "creative",
							partOfSpeech: "adjective",
							definition:
								"relating to or involving the imagination or original ideas, especially in the production of an artistic work",
							map: null,
						},
						courageous: {
							word: "courageous",
							partOfSpeech: "adjective",
							definition: "not deterred by danger or pain; brave",
							map: null,
						},
					},
				},
				accepted: {
					word: "accepted",
					partOfSpeech: "adjective",
					definition: "generally believed or recognized to be valid or correct",
					map: {
						valued: {
							word: "valued",
							partOfSpeech: "adjective",
							definition: "considered to be important or beneficial; cherished",
							map: null,
						},
						respected: {
							word: "respected",
							partOfSpeech: "adjective",
							definition:
								"admired by many people for your qualities or achievements",
							map: null,
						},
					},
				},
				proud: {
					word: "proud",
					partOfSpeech: "adjective",
					definition:
						"feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions or those of someone with whom one is closely associated",
					map: {
						confident: {
							word: "confident",
							partOfSpeech: "adjective",
							definition:
								"sure of oneself; having no uncertainty about one's own abilities, correctness, successfulness, etc.; self-confident; bold",
							map: null,
						},
						successful: {
							word: "successful",
							partOfSpeech: "adjective",
							definition:
								"having attained wealth, position, honors, or the like",
							map: null,
						},
					},
				},
				interested: {
					word: "interested",
					partOfSpeech: "adjective",
					definition:
						"showing curiosity or concern about something or someone; having a feeling of interest",
					map: {
						inquisitive: {
							word: "inquisitive",
							partOfSpeech: "adjective",
							definition: "curious or inquiring",
							map: null,
						},
						curious: {
							word: "curious",
							partOfSpeech: "adjective",
							definition: "eager to know or learn something",
							map: null,
						},
					},
				},
				content: {
					word: "content",
					partOfSpeech: "adjective",
					definition: "in a state of peaceful happiness",
					map: {
						joyful: {
							word: "joyful",
							partOfSpeech: "adjective",
							definition:
								"feeling, expressing, or causing great pleasure and happiness",
							map: null,
						},
						free: {
							word: "free",
							partOfSpeech: "adjective",
							definition:
								"not under the control or in the power of another; able to act or be done as one wishes",
							map: null,
						},
					},
				},
				playful: {
					word: "playful",
					partOfSpeech: "adjective",
					definition: "fond of games and amusement; lighthearted",
					map: {
						cheeky: {
							word: "cheeky",
							partOfSpeech: "adjective",
							definition:
								"impudent or irreverent, typically in an endearing or amusing way",
							map: null,
						},
						aroused: {
							word: "aroused",
							partOfSpeech: "adjective",
							definition: "showing or feeling sexual excitement",
							map: null,
						},
					},
				},
			},
		},
		angry: {
			word: "angry",
			partOfSpeech: "adjective",
			definition:
				"feeling or showing strong annoyance, displeasure, or hostility; full of anger",
			map: {
				critical: {
					word: "critical",
					partOfSpeech: "adjective",
					definition:
						"expressing adverse or disapproving comments or judgements",
					map: {
						dismissive: {
							word: "dismissive",
							partOfSpeech: "adjective",
							definition:
								"feeling or showing that something is unworthy of consideration",
							map: null,
						},
						skeptical: {
							word: "skeptical",
							partOfSpeech: "adjective",
							definition: "not easily convinced; having doubts or reservations",
							map: null,
						},
					},
				},
				distant: {
					word: "distant",
					partOfSpeech: "adjective",
					definition: "not intimate; cool or reserved",
					map: {
						numb: {
							word: "numb",
							partOfSpeech: "adjective",
							definition:
								"lacking or deficient in emotion or feeling; indifferent",
							map: null,
						},
						withdrawn: {
							word: "withdrawn",
							partOfSpeech: "adjective",
							definition: "not wanting to communicate with other people",
							map: null,
						},
					},
				},
				frustrated: {
					word: "frustrated",
					partOfSpeech: "adjective",
					definition:
						"feeling or expressing distress and annoyance, especially because of inability to change or achieve something",
					map: {
						annoyed: {
							word: "annoyed",
							partOfSpeech: "adjective",
							definition: "slightly angry; irritated",
							map: null,
						},
						infuriated: {
							word: "infuriated",
							partOfSpeech: "adjective",
							definition: "marked by extreme anger",
							map: null,
						},
					},
				},
				aggressive: {
					word: "aggresive",
					partOfSpeech: "adjective",
					definition:
						"ready or likely to attack or confront; characterized by or resulting from aggression",
					map: {
						hostile: {
							word: "hostile",
							partOfSpeech: "adjective",
							definition: "unfriendly; antagonistic",
							map: null,
						},
						provoked: {
							word: "provoked",
							partOfSpeech: "adjective",
							definition: "angered or enranged",
							map: null,
						},
					},
				},
				mad: {
					word: "mad",
					partOfSpeech: "adjective",
					definition: "very angry",
					map: {
						jealous: {
							word: "jealous",
							partOfSpeech: "adjective",
							definition:
								"feeling or showing envy of someone or their achievements and advantages",
							map: null,
						},
						furious: {
							word: "furious",
							partOfSpeech: "adjective",
							definition:
								"full of fury, violent passion, or rage; extremely angry; enraged",
							map: null,
						},
					},
				},
				bitter: {
					word: "bitter",
					partOfSpeech: "adjective",
					definition:
						"angry, hurt, or resentful because of one's bad experiences or a sense of unjust treatment",
					map: {
						violated: {
							word: "violated",
							partOfSpeech: "adjective",
							definition: "treated irreverently or sacrilegiously",
							map: null,
						},
						indignant: {
							word: "indignant",
							partOfSpeech: "adjective",
							definition:
								"feeling or showing anger or annoyance at what is perceived as unfair treatment",
							map: null,
						},
					},
				},
				humiliated: {
					word: "humiliated",
					partOfSpeech: "adjective",
					definition:
						"made to feel a painful loss of pride, self-respect, or dignity; deeply embarassed or put to shame",
					map: {
						ridiculed: {
							word: "ridiculed",
							partOfSpeech: "verb",
							definition:
								"subject (someone or something) to comptemptuous and dismissive language or behavior",
							map: null,
						},
						disrespected: {
							word: "disrespected",
							partOfSpeech: "verb",
							definition: "show a lack of respect for; insult",
							map: null,
						},
					},
				},
				"let down": {
					word: "let down",
					partOfSpeech: "verb",
					definition:
						"fail to support or help someone as they had hoped or expected",
					map: {
						resentful: {
							word: "resentful",
							partOfSpeech: "adjective",
							definition:
								"feeling or expressing bitterness or indignation at having been treated unfairly",
							map: null,
						},
						betrayed: {
							word: "betrayed",
							partOfSpeech: "verb",
							definition:
								"to disappoint the hopes or expectations of; be disloyal to",
							map: null,
						},
					},
				},
			},
		},
		sad: {
			word: "sad",
			partOfSpeech: "adjective",
			definition: "feeling or showing sorrow; unhappy",
			map: {
				lonely: {
					word: "lonely",
					partOfSpeech: "adjective",
					definition: "sad because one has no friends or company",
					map: {
						isolated: {
							word: "isolated",
							partOfSpeech: "adjective",
							definition:
								"having minimal contact or little in common with others",
							map: null,
						},
						abandoned: {
							word: "abandoned",
							partOfSpeech: "adjective",
							definition: "having been deserted or cast off",
							map: null,
						},
					},
				},
				vulnerable: {
					word: "vulnerable",
					partOfSpeech: "adjective",
					definition:
						"in need of special care, support, or protection because of age, disability, or risk of abuse or neglect",
					map: {
						victimized: {
							word: "victimized",
							partOfSpeech: "verb",
							definition: "single (someone) out for cruel or unjust treatment",
							map: null,
						},
						fragile: {
							word: "fragile",
							partOfSpeech: "adjective",
							definition: "not strong or sturdy; delicate and vulnerable",
							map: null,
						},
					},
				},
				despair: {
					word: "despair",
					partOfSpeech: "noun",
					definition: "the complete loss or absence of hope",
					map: {
						grief: {
							word: "grief",
							partOfSpeech: "noun",
							definition:
								"deep sorrow, especially that caused by someone's death",
							map: null,
						},
						powerless: {
							word: "powerless",
							partOfSpeech: "adjective",
							definition: "without ability, influence, or power",
							map: null,
						},
					},
				},
				guilty: {
					word: "guilty",
					partOfSpeech: "adjective",
					definition: "conscious of or affected by a feeling of guilt",
					map: {
						ashamed: {
							word: "ashamed",
							partOfSpeech: "adjective",
							definition:
								"embarassed or guilty because of one's actions, characteristics, or associations",
							map: null,
						},
						remorseful: {
							word: "remorseful",
							partOfSpeech: "adjective",
							definition:
								"feeling or expressing pain or sorrow for sins or offenses",
							map: null,
						},
					},
				},
				hurt: {
					word: "hurt",
					partOfSpeech: "adjective",
					definition: "distressed or offended by another person's behavior",
					map: {
						embarassed: {
							word: "embarassed",
							partOfSpeech: "adjective",
							definition: "feeling or caused to feel uneasy and self-conscious",
							map: null,
						},
						disappointed: {
							word: "disappointed",
							partOfSpeech: "adjective",
							definition:
								"sad or displeased because someone or something has failed to fulfill one's hopes or expectations",
							map: null,
						},
					},
				},
				depressed: {
					word: "depressed",
					partOfSpeech: "adjective",
					definition: "in a state of general unhappiness or despondency",
					map: {
						inferior: {
							word: "inferior",
							partOfSpeech: "adjective",
							definition: "lower in rank, status, or quality",
							map: null,
						},
						empty: {
							word: "empty",
							partOfSpeech: "adjective",
							definition: "having no value or purpose",
							map: null,
						},
					},
				},
			},
		},
		fearful: {
			word: "fearful",
			partOfSpeech: "adjective",
			definition: "feeling afraid; showing fear or anxiety",
			map: {
				scared: {
					word: "scared",
					partOfSpeech: "adjective",
					definition:
						"filled with fear, terror, or dread, often suddenly; frightened; alarmed",
					map: {
						helpless: {
							word: "helpless",
							partOfSpeech: "adjective",
							definition: "unable to defend oneself or to act without help",
							map: null,
						},
						frightened: {
							word: "frightened",
							partOfSpeech: "adjective",
							definition: "thrown into a state of intense fear or desperation",
							map: null,
						},
					},
				},
				anxious: {
					word: "anxious",
					partOfSpeech: "adjective",
					definition:
						"experiencing worry, unease, or nervousness, typically about an imminent event or something with an uncertain outcome",
					map: {
						overwhelmed: {
							word: "overwhelmed",
							partOfSpeech: "adjective",
							definition: "completely overcome in mind or feeling",
							map: null,
						},
						worried: {
							word: "worried",
							partOfSpeech: "adjective",
							definition:
								"anxious or troubled about actual or potential problems",
							map: null,
						},
					},
				},
				insecure: {
					word: "insecure",
					partOfSpeech: "adjective",
					definition: "not confident or assured; uncertain and anxious",
					map: {
						inadequate: {
							word: "inadequate",
							partOfSpeech: "adjective",
							definition: "unable to deal with a situation or with life",
							map: null,
						},
						inferior: {
							word: "inferior",
							partOfSpeech: "adjective",
							definition: "lower in rank, status, or quality",
							map: null,
						},
					},
				},
				weak: {
					word: "weak",
					partOfSpeech: "adjective",
					definition:
						"lacking the power to perform physically demanding tasks; lacking physical strength and energy",
					map: {
						worthless: {
							word: "worthless",
							partOfSpeech: "adjective",
							definition: "having no good qualities; deserving contempt",
							map: null,
						},
						insignificant: {
							word: "insignificant",
							partOfSpeech: "adjective",
							definition: "without power or influence",
							map: null,
						},
					},
				},
				rejected: {
					word: "rejected",
					partOfSpeech: "adjective",
					definition: "not given approval or acceptance",
					map: {
						excluded: {
							word: "excluded",
							partOfSpeech: "verb",
							definition:
								"deny (someone) access to or bar (someone) from a place, group, or privilege",
							map: null,
						},
						persecuted: {
							word: "persecuted",
							partOfSpeech: "adjective",
							definition:
								"persistently harassed or oppressed, especially because of religiousor political beliefs, ethnic or racial origin, gender identity, or sexual orientation",
							map: null,
						},
					},
				},
				threatened: {
					word: "threatened",
					partOfSpeech: "adjective",
					definition: "likely in the near future to become endangered",
					map: {
						nervous: {
							word: "nervous",
							partOfSpeech: "adjective",
							definition:
								"easily agitated or alarmed; tending to be anxious; highly strung",
							map: null,
						},
						exposed: {
							word: "exposed",
							partOfSpeech: "adjective",
							definition: "in a vulnerable position or situation",
							map: null,
						},
					},
				},
			},
		},
		surprised: {
			word: "surprised",
			partOfSpeech: "adjective",
			definition:
				"taken unawares or suddenly and feeling wonder or astonishment",
			map: {
				startled: {
					word: "startled",
					partOfSpeech: "adjective",
					definition: "feeling or showing sudden shock or alarm",
					map: {
						shocked: {
							word: "shocked",
							partOfSpeech: "adjective",
							definition: "surprised and upset",
							map: null,
						},
						dismayed: {
							word: "dismayed",
							partOfSpeech: "adjective",
							definition:
								"thoroughly disheartened, as by sudden danger or trouble",
							map: null,
						},
					},
				},
				confused: {
					word: "confused",
					partOfSpeech: "adjective",
					definition: "unable to think clearly; bewildered",
					map: {
						disillusioned: {
							word: "disillusioned",
							partOfSpeech: "adjective",
							definition:
								"disappointed in someone or something that one discovers to be less good than one had believed",
							map: null,
						},
						perplexed: {
							word: "perplexed",
							partOfSpeech: "adjective",
							definition: "completely baffled; very puzzled",
							map: null,
						},
					},
				},
				amazed: {
					word: "amazed",
					partOfSpeech: "adjective",
					definition:
						"greatly surprised; astounded; suddenly filled wiith wonder",
					map: {
						astonished: {
							word: "astonished",
							partOfSpeech: "adjective",
							definition: "greatly surprised or impressed; amazed",
							map: null,
						},
						awe: {
							word: "awe",
							partOfSpeech: "noun",
							definition:
								"a feeling of reverential respect mixed with fear or wonder",
							map: null,
						},
					},
				},
				excited: {
					word: "excited",
					partOfSpeech: "adjective",
					definition: "very enthusiastic and eager",
					map: {
						eager: {
							word: "eager",
							partOfSpeech: "adjective",
							definition: "wanting to do or have something very much",
							map: null,
						},
						energetic: {
							word: "energetic",
							partOfSpeech: "adjective",
							definition:
								"possesing or exhibiting energy, especially in abundance; vigorous",
							map: null,
						},
					},
				},
			},
		},
		disgusted: {
			word: "disgusted",
			partOfSpeech: "adjective",
			definition: "feeling or expressing revulsion or strong disapproval",
			map: {
				disapproving: {
					word: "disapproving",
					partOfSpeech: "adjective",
					definition: "expressing an unfavorable opinion",
					map: {
						judgemental: {
							word: "judgemental",
							partOfSpeech: "adjective",
							definition:
								"having or displaying and excessively critical point of view",
							map: null,
						},
						embarassed: {
							word: "embarassed",
							partOfSpeech: "adjective",
							definition: "feeling or caused to feel uneasy and self-conscious",
							map: null,
						},
					},
				},
				disappointed: {
					word: "disappointed",
					partOfSpeech: "adjective",
					definition:
						"sad or displeased because someone or something has failed to fulfill one's hopes or expectations",
					map: {
						appalled: {
							word: "appalled",
							partOfSpeech: "adjective",
							definition: "overcome with horror, shock, outrage, or dismay",
							map: null,
						},
						revolted: {
							word: "revolted",
							partOfSpeech: "adjective",
							definition: "disgusted",
							map: null,
						},
					},
				},
				awful: {
					word: "awful",
					partOfSpeech: "adjective",
					definition: "very bad or unpleasant",
					map: {
						nauseated: {
							word: "nauseated",
							partOfSpeech: "adjective",
							definition: "filled with disgust",
							map: null,
						},
						detestable: {
							word: "detestable",
							partOfSpeech: "adjective",
							definition: "deserving intense dislike",
							map: null,
						},
					},
				},
				repelled: {
					word: "repelled",
					partOfSpeech: "verb",
					definition: "be repulsive or distasteful to",
					map: {
						horrified: {
							word: "horrified",
							partOfSpeech: "adjective",
							definition: "showing or indicating extreme shock or horror",
							map: null,
						},
						hesitant: {
							word: "hesitant",
							partOfSpeech: "adjective",
							definition: "tentative, unsure, or slow in acting or speaking",
							map: null,
						},
					},
				},
			},
		},
		bad: {
			word: "bad",
			partOfSpeech: "adjective",
			definition: "regretful, guilty, or ashamed about something",
			map: {
				bored: {
					word: "bored",
					partOfSpeech: "adjective",
					definition:
						"feeling weary because one is unoccupied or lacks interest in one's current activity",
					map: {
						indifferent: {
							word: "indifferent",
							partOfSpeech: "adjective",
							definition:
								"having no particular interest or sympathy; unconcerned",
							map: null,
						},
						apathetic: {
							word: "apathetic",
							partOfSpeech: "adjective",
							definition:
								"showing or feeling no interest, enthusiasm, or concern",
							map: null,
						},
					},
				},
				busy: {
					word: "busy",
					partOfSpeech: "adjective",
					definition: "having a great deal to do",
					map: {
						pressured: {
							word: "pressured",
							partOfSpeech: "verb",
							definition:
								"attempt to persuade or coerce (someone) into doing something",
							map: null,
						},
						rushed: {
							word: "rushed",
							partOfSpeech: "adjective",
							definition: "short of time; hurrying",
							map: null,
						},
					},
				},
				stressed: {
					word: "stressed",
					partOfSpeech: "adjective",
					definition: "experiencing mental or emotional strain or tension",
					map: {
						overwhelmed: {
							word: "overwhelmed",
							partOfSpeech: "adjective",
							definition: "completely overcome in mind or feeling",
							map: null,
						},
						"out of control": {
							word: "out of control",
							partOfSpeech: "adjective",
							definition: "no longer possible to manage",
							map: null,
						},
					},
				},
				tired: {
					word: "tired",
					partOfSpeech: "adjective",
					definition: "in need of sleep or rest; weary",
					map: {
						sleepy: {
							word: "sleepy",
							partOfSpeech: "adjective",
							definition: "needing or ready for sleep",
							map: null,
						},
						unfocused: {
							word: "unfocused",
							partOfSpeech: "adjective",
							definition:
								"not seeing clearly; appearing glazed or expressionless",
							map: null,
						},
					},
				},
			},
		},
	},
};

export default emotions;
