import React from 'react';

const AddArticleForm = (
    {
        AddArticleClick,
        onChangeField,
        id,
        title,
        text,
        topic,
        author,
        date,
        showButton = true
    }) => {

    const renderInput = (inputId, inputValue, fieldName, fieldType = "text") => {
        return (
            <div>
                <label htmlFor={inputId}>{fieldName}:</label>
                <input
                    type={fieldType}
                    id={inputId}
                    value={inputValue}
                    onChange={(e) => onChangeField(id, inputId, e)}
                />
            </div>
        );
    };

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            {renderInput("title", title, "Заголовок")}
            <div>
                <label htmlFor="text">Текст:</label>
                <textarea
                    id="text"
                    value={text}
                    onChange={(e) => onChangeField(id, "text", e)}
                ></textarea>
            </div>
            {renderInput("topic", topic, "Тема")}
            {renderInput("author", author, "Автор")}
            {renderInput("date", date, "Дата", "date")}
            {showButton && <button onClick={AddArticleClick}>Добавить новую статью</button>}
    </div>
    )
}

export default AddArticleForm
