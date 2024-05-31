import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';
import './TabbedDateRangePicker.css';

const TabbedDateRangePicker = ({ dateRange, setDateRange }) => {
    const [activeTab, setActiveTab] = useState('calendar');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'calendar':
                return <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />;
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
