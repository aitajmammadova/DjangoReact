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
        contextthird: ""
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
          const response = await fetch('blogs/create/', {
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
                        <label for="blog_name" className="form_label">
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
                        <label for="farmer" className="form_label">
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
                    <label for="summary" className="form_label">
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
                    <label for="title" className="form_label">
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
                    />
                </div>

                    <div className="form_form">
                        <label for="firsttitle" className="form_label">
                            First Title*
                        </label>
                        <input
                            type="text"
                            className="form_input"

                            maxLength="256"
                            placeholder="Enter First Title"
                            id="firsttitle"
                            required
                            value={formData.firsttitle}
                            onChange={handleChange}
                            name="firsttitle"
                        />
                    </div>
                    </div>

                    <div data-aos="fade-up" className="form_row form_space form_double">
                        <div className="form_form">
                            <label for="context" className="form_label">
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
                            <label for="firstcontext" className="form_label">
                                First Context*
                            </label>
                            <textarea
                                type="text"
                                className="input_double_textarea"
 
                                placeholder="Context"
                                id="firstcontext"
                                required
                                value={formData.firstcontext}
                                onChange={handleChange}
                                name="firstcontext"
                            />
                        </div>
                    </div>    
                    <div data-aos="fade-up" className="form_row form_space">
                        <div className="form_form">
                            <label for="secondtitle" className="form_label">
                                Second Title*
                            </label>
                            <input
                                type="text"
                                className="form_input"

                                maxLength="256"
                                placeholder="Enter Second Title"
                                id="secondtitle"
                                required
                                value={formData.secondtitle}
                                onChange={handleChange}
                                name="secondtitle"
                            />
                        </div>

                        <div className="form_form">
                            <label for="thirdtitle" className="form_label">
                                Third Title*
                            </label>
                            <input
                                type="text"
                                className="form_input"

                                maxLength="256"
                                placeholder="Enter Third Title"
                                id="thirdtitle"
                                required
                                value={formData.thirdtitle}
                                onChange={handleChange}
                                name="thirdtitle"
                            />
                        </div>
                    </div>


                    <div data-aos="fade-up" className="form_row form_space form_double">
                        <div className="form_form">
                            <label for="secondcontext" className="form_label">
                                Second Context*
                            </label>
                            <textarea
                                className="input_double_textarea"
                                placeholder="Context"
                                id="secondcontext"
                                required
                                value={formData.secondcontext}
                                onChange={handleChange}
                                name="secondcontext"
                            />
                        </div>
                        <div className="form_form">
                            <label for="thirdcontext" className="form_label">
                                Third Context*
                            </label>
                            <textarea
                                className="input_double_textarea"
                                placeholder="Context"
                                id="thirdcontext"
                                required
                                value={formData.thirdcontext}
                                onChange={handleChange}
                                name="thirdcontext"
                            />
                        </div>
                         

                    </div>
 
                <button data-aos="fade-up" class="blue_btn">
                    <p>Submit</p>
                    <i class="fa-solid fa-circle-arrow-right"></i>
                </button>
            </form>
        </section>
        
        
    </>
    );
};

export default BlogCreate;
