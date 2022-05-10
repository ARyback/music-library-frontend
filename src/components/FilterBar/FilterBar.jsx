import React, { useState, useEffect } from 'react';

const FilterBar = (props) => {
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>All</label>
            <label>Filter</label>
        </form>
    );
}
 
export default FilterBar;