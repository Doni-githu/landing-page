import React, { useEffect, useState } from 'react';
import './customSelect.css'
import { useTranslation } from 'react-i18next';
interface Option {
    id: string;
    title: string;
}

const CustomSelect: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const { t, i18n } = useTranslation()


    const options: Option[] = [
        { id: 'en', title: 'English' },
        { id: 'ru', title: 'Русский' },
        { id: 'uz', title: 'Uzbek' },
    ];

    useEffect(() => {
        let found = options.find(c => c.id === localStorage.getItem('lang'))
        let found2 = found ? found : null
        setSelectedOption(found2)
        i18n.changeLanguage(found2?.id)
    }, [])


    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option: Option) => {
        localStorage.setItem("lang", option.id)
        i18n.changeLanguage(option.id)
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select">
            <div className="select-trigger" onClick={toggleSelect}>
                {selectedOption ? selectedOption.title : t("choose")}
            </div>
            <ul className={`select-options ${isOpen ? 'active' : ''}`}>
                {options.map((option) => (
                    <li
                        key={option.id}
                        value={option.id}
                        onClick={() => selectOption(option)}
                    >
                        {option.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomSelect;