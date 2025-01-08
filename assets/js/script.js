'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
    if (window.scrollY > 300) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
    this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
            sections[i].classList.add("active");
        } else {
            sections[i].classList.remove("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);



document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = new URLSearchParams({
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page: 1,
        sparkline: false
    });

    try {
        // Fetch the data
        const response = await fetch(`${apiUrl}?${params}`);
        const cryptoData = await response.json();

        // Ensure the table body exists
        const tableBody = document.querySelector('.table-body');
        if (!tableBody) {
            console.error('Table body not found. Check the selector or ensure the DOM is correct.');
            return;
        }

        // Populate the table
        tableBody.innerHTML = '';
        cryptoData.forEach((coin, index) => {
            const row = document.createElement('tr');
            row.classList.add('table-row');
            console.log(coin)
            row.innerHTML = `
                <td class="table-data">
                    <button class="add-to-fav" aria-label="Add to favourite" data-add-to-fav>
                        <ion-icon name="star-outline" aria-hidden="true" class="icon-outline"></ion-icon>
                        <ion-icon name="star" aria-hidden="true" class="icon-fill"></ion-icon>
                    </button>
                </td>
                <th class="table-data rank" scope="row">${index + 1}</th>
                <td class="table-data">
                    <div class="wrapper">
                        <img src="${coin.image}" width="20" height="20" alt="${coin.name} logo" class="img">
                        <h3>
                            <a href="#" class="coin-name">${coin.name} <span class="span">${coin.symbol.toUpperCase()}</span></a>
                        </h3>
                    </div>
                </td>
                <td class="table-data last-price">$${coin.current_price.toLocaleString()}</td>
                <td class="table-data last-update ${coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}">
                    ${coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td class="table-data market-cap">$${coin.market_cap.toLocaleString()}</td>
                <td class="table-data">
                    <img src="./assets/images/${coin.price_change_percentage_24h >= 0 ? 'chart-1.svg' : 'chart-2.svg'}" width="100" height="40" alt="profit chart" class="chart">
                </td>
                <td class="table-data">
                    <button class="btn btn-outline">Trade</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
    }
});


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    // API URL for fetching cryptocurrency data (top 4 cryptocurrencies)
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';

    const params = new URLSearchParams({
        vs_currency: 'usd', // Set the currency to USD
        ids: 'bitcoin,ethereum,tether,binancecoin', // Specify the coin IDs
        order: 'market_cap_desc', // Optional: sort by market cap
        per_page: 4, // Limit to the top 4 coins (Bitcoin, Ethereum, Tether, Binance Coin)
        page: 1, // Start from the first page
        sparkline: false // Disable sparkline for now
    });

    try {
        // Fetch the data from the API
        const response = await fetch(`${apiUrl}?${params}`);
        const cryptoData = await response.json();

        // Ensure the data is fetched successfully
        if (cryptoData && Array.isArray(cryptoData)) {
            // Update the HTML elements with live data
            const listItems = document.querySelectorAll('.tab-content li');

            cryptoData.forEach((coin, index) => {
                const listItem = listItems[index];

                // Update the coin name, symbol, and price
                listItem.querySelector('.card-title').innerHTML = `${coin.name} <span class="span">${coin.symbol.toUpperCase()}/USD</span>`;
                listItem.querySelector('.card-value').textContent = `USD ${coin.current_price.toLocaleString()}`;
                listItem.querySelector('.current-price').textContent = coin.current_price.toLocaleString();

                // Update price change percentage
                const badge = listItem.querySelector('.badge');
                badge.textContent = `${coin.price_change_percentage_24h.toFixed(2)}%`;

                // Set the badge color based on the price change percentage (green for positive, red for negative)
                if (coin.price_change_percentage_24h >= 0) {
                    badge.classList.add('green');
                    badge.classList.remove('red');
                } else {
                    badge.classList.add('red');
                    badge.classList.remove('green');
                }

                // Update the coin image
                const img = listItem.querySelector('img');
                img.setAttribute('src', coin.image);
                img.setAttribute('alt', `${coin.name} logo`);
            });
        } else {
            console.error('No data available or failed to fetch cryptocurrency data.');
        }
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
    }
});