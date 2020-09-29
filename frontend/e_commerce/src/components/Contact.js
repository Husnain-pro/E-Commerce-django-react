import { Button, notification, Space } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './contact.css';
const Contact = () => {

    const openNotificationWithIcon = (type,register) => {
        notification[type]({
          message: `Notification ${register}` ,
          description:
            'We are working on Email or Message Transfer protocol',
        });
      };

    return (
        <div class="card_container">
            <div class="card">
                <div class="card_left">
                    <h3>send us a message </h3>
                    <form>
                        <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Name</label>
                        </div>

                        <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Email</label>
                        </div>
                        <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Message</label>
                        </div>
                    </form>
                    {/* <button class="form_btn">Contact Now &#8594;</button> */}
                    <Space>
                            <Button style={{marginTop:"10px",marginLeft:"30px"}} onClick={() => openNotificationWithIcon('info','Contact')}>Contact Now &#8594;</Button>
                    </Space>
                </div>
                <div class="card_right">
                    <p>Contact Information</p>
                    <div class="info">
                        <p><i class="logo fa fa-map-marker fa-2x"></i> 360 KING STREET<br />HasilPur Pakistan,63000
                            </p>

                        <p><i class="logo fa fa-phone fa-2x"></i>+92 308 701 1212</p>
                        <p><i class="logo fa fa-envelope fa-2x"></i>mlhlk1212@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
