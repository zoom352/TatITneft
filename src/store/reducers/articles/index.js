import {ArticlesActionTypes} from "./types"

const initialState = {
    articles: [
        {
            id: 1,
            title: "Спорт",
            text: "Football is the most popular game in the world and it is played nearly in all countries. Football is played on a field and two teams compete there.\n" +
                "\n" +
                "Football team is composed of 11 players: a goalkeeper, backs, half-backs and forwards. Each team has a captain who is usually the best player. During the match every team tries to score as many goals as they can. Players are allowed to use only legs during the game. Only the goalkeeper can use his hands to catch the ball.\n" +
                "\n" +
                "Despite being so popular today, football appeared hundreds years ago. It was played even by ancient people. However, football wasn’t famous until mid-1900s. The modern version of the game came from England and became the most favourite one.\n" +
                "\n" +
                "Today there are many football competitions and championships. Every year Europe houses FIFA Cup competitions and every four years – the World Cup. Football is also played in the Olympics. Anyway, football is loved by millions of people who watch games on TV, go to see them on stadiums and even play football with friends and peers during their leisure time.\n" +
                "\n" +
                "Moreover, there are such crazy fans that travel all over the world with their favourite teams and support them all the time. Manchester United, Liverpool, the Arsenal, FC Barcelona, Real Madrid, Chelsea and some others are considered to be the best and most famous clubs in the world",
            topic: "Футбол",
            author: "Мбаппе",
            date: "2023-06-07",
            comments: ["title", "topic"]
        },
        {
            id: 2,
            title: "Спорт",
            text: "ice hockey, game between two teams, each usually having six players, who wear skates and compete on an ice rink. The object is to propel a vulcanized rubber disk, the puck, past a goal line and into a net guarded by a goaltender, or goalie. With its speed and its frequent physical contact, ice hockey has become one of the most popular of international sports. The game is an Olympic sport, and worldwide there are more than a million registered players performing regularly in leagues. It is perhaps Canada’s most popular game",
            topic: "Хокей",
            author: "Нэш",
            date: "2023-06-08",
            comments: ["title"]
        },
        {
            id: 3,
            title: "Программирование",
            text: "Next.js is a lightning-fast React framework trusted by data-heavy streaming sites like Hulu and Netflix. If you’re already versed in React, you should definitely get to know this increasingly popular technology.\n" +
                "\n" +
                "Though both React and Next.js help create effective web user interfaces, they have some key differences: Next.js is more feature-rich and opinionated than React. It is especially well-suited for websites focused on search engine optimization (SEO) or pre-rendering",
            topic: "Frontend",
            author: "Абрамов",
            date: "2023-06-09",
            comments: ["React", "Next"]
        }
    ],
}

const ArticlesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ArticlesActionTypes.ADD_ARTICLE:
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload
                ]
            }

        case ArticlesActionTypes.DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(item => item.id !== action.payload.id)
            }

        case ArticlesActionTypes.ADD_COMMENT:
            return {
                ...state,
                articles: state.articles.map((item) => {
                    if(item.id === action.payload.id){
                        return {
                            ...item,
                            comments: [
                                ...item.comments,
                                action.payload.comment
                            ]
                        }
                    }

                    return item
                })
            }

        case ArticlesActionTypes.FILTER_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(item => item.title.toLowerCase().includes(action.payload))
            }

        case ArticlesActionTypes.UPDATE_ARTICLE_FIELD:
            const { id, field, value } = action.payload;
            const updatedArticles = state.articles.map((article) => {
                if (article.id === id) {
                    return {
                        ...article,
                        [field]: value
                    }
                }

                return article
            })

            return {
                ...state,
                articles: updatedArticles
            };

        default:
            return state
    }
}

export default ArticlesReducers
