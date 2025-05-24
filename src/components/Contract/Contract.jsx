import React, { useState } from 'react';
import "./Contract.scss";
import { Col, Container, Row } from 'react-bootstrap';
import agtech from "../../assets/Frame 48.png";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function Contract() {
  const [phone, setPhone] = useState('');

  return (
    <div className='contract'>
      <Container>
        <Row className='align-items-center'>
          <Col lg='5' className='imgg'>
            <img src={agtech} alt="AG TECH" />
          </Col>
          <Col lg='7'>
            <h2>Хотите сотрудничать?</h2>
            <p>
              Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время,
              ответит на все интересующие вопросы и поможет даже в самых сложных случаях!
            </p>
            <form action="">
              <div className="form">
                <input type="text" placeholder='Имя' className="input" />
                <PhoneInput
                  country={'uz'}
                  value={phone}
                  onChange={setPhone}
                  inputClass="input"
                  placeholder='+998 (__) ___-__-__'
                  enableSearch={true}
                  disableDropdown={false}
                  preferredCountries={['uz', 'ru']}
                />
              </div>
              <div className="accept">
                <button className="submit">Отправить заявку</button>
                <p>Обращаясь к нам, вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации!</p>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contract;