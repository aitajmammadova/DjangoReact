import React, { useState, useEffect } from "react";

const BlogCreate = () => {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        fetch("/blogs/create")
            .then((response) => response.json())
            .then((data) => {
                setFormData(data.form_data);
            })
            .catch((error) => {
                console.error("Error fetching form data:", error);
            });
    }, []);

    const generateForm = (formData) => {
        return formData.map((field) => {
            const type = field.type ? field.type : "text";

            return (
                <div key={field.name} className="blogcreate">
                    <label className="label_form" htmlFor={field.name}>
                        {field.label}
                    </label>
                    {type === "text" ? (
                        <input
                            className="input_form"
                            type="text"
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                        />
                    ) : type === "textarea" ? (
                        <textarea
                            className="input_form textarea"
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                        ></textarea>
                    ) : type === "image" ? (
                        <input
                            className="input_form image_type"
                            type="file"
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                        />
                    ) : null}
                </div>
            );
        });
    };

    return (
        
        <form className="form_form" method="post" action="/blogs/create/">
            {generateForm(formData)}
            <button className="blue_btn" type="submit">
                <p>Submit</p>
            </button>
        </form>
    );
};

export default BlogCreate;
