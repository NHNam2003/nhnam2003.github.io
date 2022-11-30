document.body.onscroll = function () {
    if(document.documentElement.scrollTop >= 633) {
        document.querySelectorAll('.heading-contant__name').forEach(item => {
            item.style.color = '#333'
            document.querySelector('.heading-contant').innerHTML = 
            `<p class="contant-list__item-content-js heading-contant__name">Contant with me</p>
            <ul class="contant-list-js">
                <li class="contant-list__item">
                    <a href="https://www.facebook.com/huunam2003" target="_blank" class="contant-list__item-link">
                        <i class="fa-brands fa-facebook facebook"></i>
                        <span class="contant-list__item-content-js">Facebook</span>
                    </a>
                </li>
                
                <li class="contant-list__item">
                    <a href="https://www.instagram.com/3843nam" target="_blank" class="contant-list__item-link">
                        <i class="fa-brands fa-instagram instagram"></i>
                        <span class="contant-list__item-content-js">Instagram</span>
                    </a>
                </li>

                <li class="contant-list__item">
                    <a href="https://twitter.com/Nam31214" target="_blank" class="contant-list__item-link">
                        <i class="fa-brands fa-twitter twitter"></i>
                        <span class="contant-list__item-content-js">Twitter</span>
                    </a>
                </li>
            </ul>
            `
        })
    } else {
        document.querySelectorAll('.heading-contant__name').forEach(item => {
            item.style.color = '#fff'
            document.querySelector('.heading-contant').innerHTML = 
            `<p class="contant-list__item-content heading-contant__name">Contant with me</p>
            <ul class="contant-list">
            <li class="contant-list__item">
                <a href="https://www.facebook.com/huunam2003" target="_blank" class="contant-list__item-link">
                    <i class="fa-brands fa-facebook facebook"></i>
                    <span class="contant-list__item-content">Facebook</span>
                </a>
            </li>
            
            <li class="contant-list__item">
                <a href="https://www.instagram.com/3843nam" target="_blank" class="contant-list__item-link">
                    <i class="fa-brands fa-instagram instagram"></i>
                    <span class="contant-list__item-content">Instagram</span>
                </a>
            </li>

            <li class="contant-list__item">
                <a href="https://twitter.com/Nam31214" target="_blank" class="contant-list__item-link">
                    <i class="fa-brands fa-twitter twitter"></i>
                    <span class="contant-list__item-content">Twitter</span>
                </a>
            </li>
        </ul>`
        })
    }
}

