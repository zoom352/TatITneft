import {ArticlesActionTypes} from "./types";

export const updateArticleField = (id, field, value) => {
    return {
        type: ArticlesActionTypes.UPDATE_ARTICLE_FIELD,
        payload: { id, field, value }
    };
}
export const setAddArticle = payload => ({type: ArticlesActionTypes.ADD_ARTICLE, payload})
export const setDeleteArticle = payload => ({type: ArticlesActionTypes.DELETE_ARTICLE, payload})
export const setAddComment = payload => ({type: ArticlesActionTypes.ADD_COMMENT, payload})
export const setFilteredArticle = payload => ({type: ArticlesActionTypes.FILTER_ARTICLE, payload})
