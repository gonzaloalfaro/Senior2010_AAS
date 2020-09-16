<style>
    .Header
    {
        background-color: #fff;
        padding: 0 0 0 0;
    }
    .Header-container {
        display: grid;
        grid-template-columns: minmax(auto, 1024px);
        justify-content: center;
        align-items: center;
        padding: 10px 0 0 0 
    }
    .Header-content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
    .Header-logo  {
        display: block;
        text-align: center;

    }
    .Header-logo img {
        width: 65%;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
    .Header-logo img {
        width: 65%;
        cursor: pointer;
    }
}
</style>

<header class="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <a href="#">
                <img src="seniorlogo2.svg" alt="">
                </a>
            </div>
        </div>
    </div>
</header>