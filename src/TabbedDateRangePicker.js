import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';
import './TabbedDateRangePicker.css';

const TabbedDateRangePicker = ({ dateRange, setDateRange }) => {
    const [activeTab, setActiveTab] = useState('calendar');
    const [activeButton, setActiveButton] = useState("Exact dates");

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
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={true} />
                                        A weekend
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={true} />
                                        A week
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={true} />
                                       A month
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input type="radio" value="option1" checked={true} />
                                        Other
                                    </label>
                                </div>
                        </div>
                    </div>
                    <div class="month-select-div">
                        <h3>When do you want to go?</h3>
                        <h4>Select up to 3 months</h4>
                        <div class="months-holder">
                            <div class="select-month">
                                <div class="month-icon-holder"></div>
                                <p>Month Name</p>
                            </div>
                        </div>
                    </div>
                    <div class="btn-div d-flex">
                        <p>Selected month</p>
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
