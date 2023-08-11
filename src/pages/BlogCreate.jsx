import React, { useState, useEffect } from "react";

const BlogCreate = () => {
 
    const [formData, setFormData] = useState({
        blog_name: "",
        farmer: "",
        blog_title: "",
        summary: "",
        title: "",
        context: "",
        titlefirst: "",
        contextfirst: "",
        titlesecond: "",
        contextsecond: "",
        titlethird: "",
        contextthird: "",
        // image: ""
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
       
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('/blogs/create/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          if (response.ok) {
            // E-posta gönderimi başarılıysa
            alert('Teşekkürler! İletişim bilgileriniz kaydedildi.');
          } else {
            // E-posta gönderimi başarısızsa
            alert('Formu göndermek mümkün olmadı: ' + data.error);
          }
        } catch (error) {
          // E-posta gönderme işlemi sırasında bir hata oluştu
          alert('Formu göndermek mümkün olmadı: ' + error.message);
        }
        // setFormData({
        //     blog_name: "",
        //     farmer: "",
        //     blog_title: "",
        //     summary: "",
        //     title: "",
        //     context: "",
        //     titlefirst: "",
        //     contextfirst: "",
        //     titlesecond: "",
        //     contextsecond: "",
        //     titlethird: "",
        //     contextthird: "",
        //     image:""
        // })
      };

    return (
        <>
        <section className="blog_begin_create full-container">
            <p>Your blog</p>
        </section>
        <section className="blog_create container">
            <form method="post" onSubmit={handleSubmit}>

                <div data-aos="fade-up" className="form_row form_space">
                    <div className="form_form">
                        <label htmlFor="blog_name" className="form_label">
                            Blog Name*
                        </label>
                        <input
                            type="text"
                            className="form_input"
                            maxLength="256"
                            placeholder="Enter Your Blog name"
                            id="blog_name"
                            required
                            value={formData.blog_name}
                            onChange={handleChange}
                            name="blog_name"
                        />
                    </div>
                    <div className="form_form">
                        <label htmlFor="farmer" className="form_label">
                            Farmer*
                        </label>
                        <input
                            type="text"
                            className="form_input"

                            maxLength="256"
                            placeholder="Enter Your Name"
                            id="farmer"
                            required
                            value={formData.farmer}
                            onChange={handleChange}
                            name="farmer"
                        />
                    </div>
                </div>
        
                <div data-aos="fade-up" className="form_message form_space">
                    <label htmlFor="summary" className="form_label">
                        Summary*
                    </label>
                    <textarea
                        placeholder="Summary"
                        id="summary"
                        className="input_textarea"
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                    ></textarea>
                </div>
                    <div data-aos="fade-up" className="form_row form_space">
                <div className="form_form">
                    <label htmlFor="title" className="form_label">
                        Title*
                    </label>
                    <input
                        type="text"
                        className="form_input"

                        maxLength="256"
                        placeholder="Enter Title"
                        id="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                        name="title"
                    ></input>
                </div>

                    <div className="form_form">
                        <label htmlFor="titlefirst" className="form_label">
                            First Title*
                        </label>
                        <input
                            type="text"
                            className="form_input"
                            maxLength="256"
                            placeholder="Enter First Title"
                            id="titlefirst"
                            required
                            value={formData.titlefirst}
                            onChange={handleChange}
                            name="titlefirst"
                        ></input>
                    </div>
                    </div>

                    <div data-aos="fade-up" className="form_row form_space form_double">
                        <div className="form_form">
                            <label htmlFor="context" className="form_label">
                                Context*
                            </label>
                            <textarea
                                className="input_double_textarea"
                                placeholder="Context"
                                id="context"
                                required
                                value={formData.context}
                                onChange={handleChange}
                                name="context"
                            />
                        </div>

                        <div className="form_form">
                            <label htmlFor="contextfirst" className="form_label">
                                First Context*
                            </label>
                            <textarea
                                type="text"
                                className="input_double_textarea"
                                placeholder="Context"
                                id="contextfirst"
                                required
                                value={formData.contextfirst}
                                onChange={handleChange}
                                name="contextfirst"
                            />
                        </div>
                    </div>    
                    <div data-aos="fade-up" className="form_row form_space">
                        <div className="form_form">
                            <label htmlFor="titlesecond" className="form_label">
                                Second Title*
                            </label>
                            <input
                                type="text"
                                className="form_input"

                                maxLength="256"
                                placeholder="Enter Second Title"
                                id="titlesecond"
                                value={formData.titlesecond}
                                onChange={handleChange}
                                name="titlesecond"
                            />
                        </div>

                        <div className="form_form">
                            <label htmlFor="titlethird" className="form_label">
                                Third Title*
                            </label>
                            <input
                                type="text"
                                className="form_input"

                                maxLength="256"
                                placeholder="Enter Third Title"
                                id="titlethird"
                                value={formData.titlethird}
                                onChange={handleChange}
                                name="titlethird"
                            />
                        </div>
                    </div>


                    <div data-aos="fade-up" className="form_row form_space form_double">
                        <div className="form_form">
                            <label htmlFor="contextsecond" className="form_label">
                                Second Context*
                            </label>
                            <textarea
                                className="input_double_textarea"
                                placeholder="Context"
                                id="contextsecond"
                                value={formData.contextsecond}
                                onChange={handleChange}
                                name="contextsecond"
                            />
                        </div>
                        <div className="form_form">
                            <label htmlFor="contextthird" className="form_label">
                                Third Context*
                            </label>
                            <textarea
                                className="input_double_textarea"
                                placeholder="Context"
                                id="contextthird"
                                value={formData.contextthird}
                                onChange={handleChange}
                                name="contextthird"
                            />
                        </div>

                    </div>
                    {/* <div data-aos="fade-up" className="form_row form_space">
                        <div className="form_form">
                            <label htmlFor="image" className="form_label">
                                Image*
                            </label>
                            <input
                                type="image"
                                // className="form_input"
                                id="image"
                                // value={formData.image}
                                onChange={handleChange}
                                name="image" />
                        </div>
                    </div> */}
                <button data-aos="fade-up" className="blue_btn">
                    <p>Submit</p>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                </button>
            </form>
        </section>
        
        
    </>
    );
};

export default BlogCreate;
