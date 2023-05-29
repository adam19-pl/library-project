import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import MyInput from '../../fields/input';
import TextArea from '../../fields/textarea';
import moment from "moment";

const CreateForm = ({ dataBooks, userInformation }) => {
    const navigate = useNavigate();
    const currentYear = moment().year();
    return (<Formik initialValues={{ title: '', description: '', year: '', status: 0, }}
        validationSchema={Yup.object({
            title: Yup.string().min(2, 'Tytuł powinien posiadać więcej niż 2 litery').required('Proszę, uzupełnij to pole.'),
            author: Yup.string().min(2, 'Podaj Autora').required('Proszę, uzupełnij to pole.'),
            description: Yup.string().min(6, 'Pole opisu powinno zawierać więcej niz 6 znaków').required('Proszę, uzupełnij to pole.'),
            year: Yup.number().min(868, 'Minimalny rok wydania to 868r, ponieważ dotychczasowo "Diamentowa Sutra" jest uznana za najstarszą książkę').max(currentYear, `Maksymalny rok wyania to ${currentYear}`).required('Proszę, uzupełnij to pole.'),
        })}
        onSubmit={(values) => {
            navigate('/create/confirm/', { state: { values } })
        }}
    >
        <Form>
            <MyInput
                label="Tytuł"
                name="title"
                type="text"
                placeholder="Tytuł"
            />
            <MyInput
                label="Autor"
                name="author"
                type="text"
                placeholder="Autor"
            />
            <TextArea
                label="Opis"
                name="description"
                type="textarea"
                placeholder="Dodaj opis książki"
            />
            <MyInput
                label="Year"
                name="year"
                type="number"
                placeholder="868"
            />

            <button className="create-project-button" type="submit">Dodaj</button>
        </Form>

    </Formik>
    )
}

export default CreateForm;