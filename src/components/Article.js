import React, {useState} from 'react'
import Modal from "../UI/modal";
import AddArticleForm from "./AddArticleForm";
import {setAddComment, setDeleteArticle, updateArticleField} from "../store/reducers/articles/action-creators";
import {useDispatch} from "react-redux";

const Article = ({ article}) => {
    const [active, setActive] = useState(false)
    const [isComment, setIsComment] = useState(false)
    const [comment, setComment] = useState("")
    const { id, title, text, topic, author, date, comments } = article
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(setDeleteArticle({id}))
    }

    const onChangeField = (id, field, e) => {
        dispatch(updateArticleField(id, field, e.target.value))
    }

    const openEditModal = () => {
        setActive(true)
    }

    const addComment = (id) => {
        if(comment) {
            dispatch(setAddComment({
                id,
                comment
            }))
            setIsComment(false)
            setComment("")
        }
        setIsComment(false)
    }

    const onChangeComment = (e) => {
        setComment(e.target.value)
    }

    return (
        <div className="article">
            <h2>
                <strong>Заголовок: </strong>
                {article.title}
            </h2>
            <p>
                <strong>Текст: </strong>
                {article.text}
            </p>
            <p>
                <strong>Тема: </strong>
                {article.topic}
            </p>
            <p>
                <strong>Автор: </strong>
                {article.author}
            </p>
            <p>
                <strong>Дата: </strong>
                {article.date}
            </p>
            <Modal
                active={active}
                setActive={setActive}
            >
                <AddArticleForm
                    onChangeField={onChangeField}
                    id={id}
                    title={title}
                    text={text}
                    topic={topic}
                    author={author}
                    date={date}
                    showButton={false}
                />
            </Modal>
            <h3>Комментарии к статье</h3>
            {comments.map((item) => {
                return (
                    <p>{item}</p>
                )
            })}
            {isComment && (
                <>
                    <textarea
                        onChange={(e) => onChangeComment(e)}
                    />
                    <div>
                        <button onClick={() => addComment(id)}>Добавить комментарий</button>
                    </div>
                </>
            )
            }
            <div className="action-buttons">
                <button onClick={() => openEditModal(id)}>Редактировать</button>
                {isComment ?
                    <button
                        style={{background: "#f44336"}}
                        onClick={() => setIsComment(false)}
                    >
                        Отмена
                    </button>
                    : <button onClick={() => setIsComment(true)}>Добавить комментарий</button>
                }
                <button onClick={() => handleDelete(id)}>Удалить</button>
            </div>
        </div>
    )
}

export default Article
