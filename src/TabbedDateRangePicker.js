import React, { useState, useRef, useEffect } from 'react';
import DateRangePicker from './DateRangePicker';
import './TabbedDateRangePicker.css';


const getNextMonths = () => {
    const months = [];
    const currentDate = new Date();

    for (let i = 0; i < 12; i++) {
        const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, 1);
        const month = futureDate.toLocaleString('default', { month: 'short' });
        const year = futureDate.getFullYear();
        months.push({ month, year });
    }

    return months;
};


const MonthDisplay = () => {
    const months = getNextMonths();
    const containerRef = useRef(null);
    const [scrollable, setScrollable] = useState({ left: false, right: true });

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                setScrollable({
                    left: scrollLeft > 0,
                    right: scrollLeft < scrollWidth - clientWidth
                });
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            const currentRef = containerRef.current;
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -((containerRef.current.clientWidth -80) / 6 + 16),
                behavior: 'smooth'
            });
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: ((containerRef.current.clientWidth -80) / 6 + 16),
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="month-display-container d-flex">
            {scrollable.left && (
                <button class="month-display-left" onClick={handleScrollLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M15.087 19.236a.9.9 0 0 1-.642-.266l-6.057-6.057A1.3 1.3 0 0 1 8 11.968c-.008-.35.123-.69.364-.945l6.057-6.057a.91.91 0 0 1 1.284 0 .895.895 0 0 1 0 1.284l-5.694 5.718 5.718 5.718a.896.896 0 0 1 0 1.284.88.88 0 0 1-.642.266"></path></svg>
                </button>
            )}
            <div className="months-holder d-flex" ref={containerRef}>

                {months.map(({ month, year }, index) => (
                    <div className="select-month" key={index}>
                        <div className="month-icon-holder">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5M7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0m10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0"></path>
                            </svg>
                        </div>
                        <span className="month">{month}</span>
                        <span className="year">{year}</span>
                    </div>
                ))}
            </div>
            {scrollable.right && (
                <button class="month-display-right" onClick={handleScrollRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-rtl-flip="true"><path d="M8.913 19.236a.9.9 0 0 0 .642-.266l6.057-6.057a1.3 1.3 0 0 0 .388-.945c.008-.35-.123-.69-.364-.945L9.58 4.966a.91.91 0 0 0-1.284 0 .896.896 0 0 0 0 1.284l5.694 5.718-5.718 5.718a.896.896 0 0 0 0 1.284.88.88 0 0 0 .642.266"></path></svg>
                </button>
            )}
        </div>
    );
};


const TabbedDateRangePicker = ({ dateRange, setDateRange }) => {
    const [activeTab, setActiveTab] = useState('calendar');
    const [activeButton, setActiveButton] = useState("Exact dates");
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleButtonClick = (buttonLabel) => {
        setActiveButton(buttonLabel);
        switch (buttonLabel) {
            case "1 day":
                setDateRange({
                    startDate: dateRange.startDate,
                    endDate: dateRange.endDate,
                    count: '(±1)'
                });
                break;
            case "2 days":
                setDateRange({
                    startDate: dateRange.startDate,
                    endDate: dateRange.endDate,
                    count: '(±2)'
                });
                break;
            case "3 days":
                setDateRange({
                    startDate: dateRange.startDate,
                    endDate: dateRange.endDate,
                    count: '(±3)'
                });
                break;
            case "7 days":
                setDateRange({
                    startDate: dateRange.startDate,
                    endDate: dateRange.endDate,
                    count: '(±7)'
                });
                break;
            default:
                setDateRange({
                    startDate: dateRange.startDate,
                    endDate: dateRange.endDate,
                    count: ''
                });
                break;
        }
    };


    const renderTabContent = () => {
        switch (activeTab) {
            case 'calendar':
                return <div>
                    <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
                    <div className="five-btn-holder">
                        <div
                            className={`five-btn ${activeButton === "Exact dates" ? "five-btn-active" : ""}`}
                            onClick={() => handleButtonClick("Exact dates")}
                        >
                            Exact dates
                        </div>
                        <div
                            className={`five-btn ${activeButton === "1 day" ? "five-btn-active" : ""}`}
                            onClick={() => handleButtonClick("1 day")}
                        >
                            <svg className="plus-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="rgb(67, 65, 65)" d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1M4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2"></path>
                            </svg>
                            <span>1 day</span>
                        </div>
                        <div
                            className={`five-btn ${activeButton === "2 days" ? "five-btn-active" : ""}`}
                            onClick={() => handleButtonClick("2 days")}
                        >
                            <svg className="plus-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="rgb(67, 65, 65)" d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1M4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2"></path>
                            </svg>
                            <span>2 days</span>
                        </div>
                        <div
                            className={`five-btn ${activeButton === "3 days" ? "five-btn-active" : ""}`}
                            onClick={() => handleButtonClick("3 days")}
                        >
                            <svg className="plus-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="rgb(67, 65, 65)" d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1M4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2"></path>
                            </svg>
                            <span>3 days</span>
                        </div>
                        <div
                            className={`five-btn ${activeButton === "7 days" ? "five-btn-active" : ""}`}
                            onClick={() => handleButtonClick("7 days")}
                        >
                            <svg className="plus-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="rgb(67, 65, 65)" d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1M4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2"></path>
                            </svg>
                            <span>7 days</span>
                        </div>
                    </div>

                </div>;
            case 'flexible':
                return <div>
                    <div class="bullet-div">
                        <h3>How long do you want to stay?</h3>
                        <div class="d-flex">
                            <div className="radio d-flex">
                                <label className="custom-radio">
                                    <input id="option-weekend" type="radio" name="options" value="option1" checked={selectedOption === 'option1'}
                                        onChange={handleRadioChange}>
                                    </input>
                                    <span className="radio-mark"></span>
                                    A weekend
                                </label>
                            </div>
                            <div className="radio d-flex">
                                <label className="custom-radio">
                                    <input id="option-week" type="radio" name="options" value="option2" checked={selectedOption === 'option2'}
                                        onChange={handleRadioChange}>
                                    </input>
                                    <span className="radio-mark"></span>
                                    A week
                                </label>
                            </div>
                            <div className="radio d-flex">
                                <label className="custom-radio">
                                    <input id="option-month" type="radio" name="options" value="option3" checked={selectedOption === 'option3'}
                                        onChange={handleRadioChange}>
                                    </input>
                                    <span className="radio-mark"></span>
                                    A month
                                </label>
                            </div>
                            <div className="radio d-flex">
                                <label className="custom-radio">
                                    <input id="option-other" type="radio" name="options" value="option4"  checked={selectedOption === 'option4'}
                                        onChange={handleRadioChange}>
                                    </input>
                                    <span className="radio-mark"></span>
                                    Other
                                </label>
                            </div>

                        </div>
                        {selectedOption === 'option4' && (
                            <div class="other-hidden-div">
                                <div class="num-of-dates d-flex">
                                    <input class="num-of-dates-input" type="number" min="1" max="90"></input>
                                    <div class="nights">nights</div>
                                </div>
                                <div class="from-day d-flex">
                                    <select class="from-day-select no-arrow">
                                        <option value="1">From Monday</option>
                                        <option value="2">From Tuesday</option>
                                        <option value="3">From Wednesday</option>
                                        <option value="4">From Thrusday</option>
                                        <option value="5">From Friday</option>
                                        <option value="6">From Saturday</option>
                                        <option value="7">From Sunday</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </div>

                    <div class="month-select-div">
                        <h3>When do you want to go?</h3>
                        <h4>Select up to 3 months</h4>
                        <MonthDisplay />
                    </div>
                    <div class="btn-div d-flex">
                        <span class="selected-month">Select preferred months</span>
                        <div class="select-dates-btn">Select dates</div>
                    </div>
                </div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="tabs">
                <button className={`tab ${activeTab === 'calendar' ? 'active' : ''}`} onClick={() => setActiveTab('calendar')}>
                    Calendar
                </button>
                <button className={`tab ${activeTab === 'flexible' ? 'active' : ''}`} onClick={() => setActiveTab('flexible')}>
                    I'm Flexible
                </button>

            </div>
            <div
                className="underline"
                style={{
                    transform: activeTab === 'calendar' ? 'translateX(0)' : 'translateX(100%)',
                }}
            />
            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default TabbedDateRangePicker;
