import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Article from './Article';
import AddArticleForm from "./AddArticleForm";
import Modal from "../UI/modal";
import {setAddArticle} from "../store/reducers/articles/action-creators";


const ArticleList = () => {
    const {articles} = useSelector(state => state.articles)
    const dispatch = useDispatch()
    const [state, setState] = useState({
        id: Math.random(),
        title: "",
        text: "",
        topic: "",
        author: "",
        date: "",
        comments: []
    })
    const [active, setActive] = useState(false)
    const [search, setSearch] = useState("")
    const [filteredItems, setFilteredItems] = useState(articles)

    useEffect(() => {
        setFilteredItems(articles)
    }, [articles])

    const articlesFilterByAuthor = (name) => {
        const filtered = articles.filter(item => item.author.toLowerCase().includes(name.toLowerCase()))
        setFilteredItems(filtered)
    }

    const articlesFilterByDate = (date) => {
        const filteredList = articles.filter(item => new Date(item.date) >= new Date(date))
        setFilteredItems(filteredList)
    }

    const articlesFilterByTopic = (name) => {
        const filtered = articles.filter(item => item.topic.toLowerCase().includes(name.toLowerCase()))
        setFilteredItems(filtered)
    }

    const AddArticleClick = () => {
        dispatch(setAddArticle(state))
        setActive(false)
        setState((prevState) => ({
            ...prevState,
            id: Math.random()
        }))
    }

    const onChangeField = (id, fieldName, e) => {
        setState((prevState) => ({
            ...prevState,
            [fieldName]: e.target.value
        }))
    }

    const searchClick = () => {
        if(search) {
            const filteredList = articles.filter(item => item.title.toLowerCase() === search.toLowerCase())
            setFilteredItems(filteredList)
        }
    }

    return (
        <div>
            <h2>Поиск по заголовку</h2>
            <div>
                <input type="text" onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={searchClick}>Поиск</button>
            </div>
            <div>
                <h2>Отфильтровать</h2>
            </div>
            <div className="containerInput">
                <span className="label">Автор</span>
                <input type="text" onChange={(e) => articlesFilterByAuthor(e.target.value)} />
                <span className="label">Дата от</span>
                <input type="date" onChange={(e) => articlesFilterByDate(e.target.value)} />
                <p className="label">Тема</p>
                <input type="text" onChange={(e) => articlesFilterByTopic(e.target.value)} />
            </div>
            <Modal
                active={active}
                setActive={setActive}
            >
                <AddArticleForm
                    AddArticleClick={AddArticleClick}
                    onChangeField={onChangeField}
                    title={state.title}
                    text={state.text}
                    topic={state.topic}
                    author={state.author}
                    date={state.date}
                />
            </Modal>
            <button onClick={() => setActive(true)}>Добавить статью</button>
            <h2>Список статей</h2>
            {filteredItems.map(article => (
                <Article
                    key={article.id}
                    article={article}
                />
            ))}
        </div>
    )
}

export default ArticleList
