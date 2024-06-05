import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';
import './TabbedDateRangePicker.css';

const TabbedDateRangePicker = ({ dateRange, setDateRange }) => {
    const [activeTab, setActiveTab] = useState('calendar');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'calendar':
                return <div>
                    <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
                    <div class="five-btn-holder">
                        <div class="five-btn">Exact dates</div>
                        <div class="five-btn">
                            <svg class="plus-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1M4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2"></path></svg>
                            <span>1 day</span>
                        </div>
                        <div class="five-btn">
                            <svg class="plus-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1M4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2"></path></svg>
                            <span>2 days</span>
                        </div>
                        <div class="five-btn">
                            <svg class="plus-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1M4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2"></path></svg>
                            <span>3 days</span>
                        </div>
                        <div class="five-btn">
                            <svg class="plus-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.14 22.94a1 1 0 0 1-1 1H3.86a1 1 0 1 1 0-2h16.28a1 1 0 0 1 1 1M4 10h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V1a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2"></path></svg>
                            <span>7 days</span>
                        </div>
                    </div>
                </div>;
            case 'flexible':
                return <div>I'm flexible content goes here</div>;
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
