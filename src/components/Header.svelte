<style>
    .Header
    {
        background-color: #fff;
        padding: 0.5em 0 0 0;
    }
    .Header-container {
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
    }
    .Header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .Header-logo  {
        display: block;
        text-align: center;

    }
    .Header-logo img {
        width: 25%;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
    .Header-logo img {
        width: 50%;
        cursor: pointer;
    }
}
</style>

<header class="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <img src="seniorlogo.svg" alt="">
            </div>
        </div>
    </div>
</header>