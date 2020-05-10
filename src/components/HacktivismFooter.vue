<template>

<footer>
    <section class="footer-container-upper">

        <section>
            <h3>About Us</h3>
            <a href="">Mission</a>
            <a href="">Team</a>
        </section>
        <section>
            <h3>Stay Informed</h3>
            <a href="">Blog</a>
            <a href="">Stories</a>
            <a href="">Resources</a>
        </section>
        <section>
            <h3>Get Involved</h3>
            <a href="">Petition</a>
            <a href="">Share Your Story</a>
        </section>
        <section>
            <h3>Contact Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </section>

    </section>

    <section class="footer-container-bottom">

        <section>
            <font-awesome-icon class="footerIcons" :icon="{ prefix: 'fab', iconName: 'twitter-square' }"/>
            <font-awesome-icon class="footerIcons" :icon="{ prefix: 'fab', iconName: 'facebook-square' }"/>
            <font-awesome-icon class="footerIcons" :icon="{ prefix: 'fab', iconName: 'instagram-square' }"/>
        </section>

        <section>

            &copy; 2020 Hactivism

        </section>

        <section>

            Take Back Your Home!

        </section>

    </section>

    
</footer>
    
</template>

<script>
export default {
  name: 'HacktivismFooter',
  props: {
    msg: String
  }
}
</script>

<style scoped>
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

footer {
    padding: 40px 0;
    margin: 0 25px;
}
.footer-container-upper {
    display: flex;
    padding-bottom: 30px;
    justify-content: space-between;
    position: relative;
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
    text-align: left;
}
.footer-container-bottom {
    padding-top: 30px;
    border-top: 1px solid #4f5a60;
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: 1150px;
    width: 100%;
    margin: 0 auto; 
}
.footerIcons {
    font-size: 18px;
    margin-right: 16px;
}

footer h3 {

    text-transform: uppercase;
    margin: 0 0 15px;
    line-height: 1.1;
}

footer a, footer b {

    display: inline-block;
    width: 100%;
    padding: 6px 0;
}
@media (max-width: 400px) {
    footer {
        padding: 0;
        margin:  0;
    }
    .footer-container-upper {
        display: none;
        }
    .footer-container-bottom {
padding: 3%;
    padding-top: 0;
    border-top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
    background: #1e3059;
}
    .footer-container-bottom section:nth-child(1), .footer-container-bottom section:nth-child(2) {
        display: none;
        }
    .footer-container-bottom section:nth-child(3){
    background: #ff3265;
    margin: auto;
    font-weight: 400;
    line-height: 1.5;
    margin: 4px auto;
    padding: 1.5em 1.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-weight: 700;
    border-radius: 3rem;
    border: solid;
    width: 85%;
    box-shadow: 5px 10px #ff3265;      
    }
}

</style>