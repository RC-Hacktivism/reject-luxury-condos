<template>

<footer>
    <section class="footer-container-upper showFooterContent">

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

    <section class="footer-container-bottom showFooterContent">

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

    <Button class="showBtn"/>
    
</footer>
    
</template>

<script>
import Button from './Button.vue';
export default {
  name: 'HacktivismFooter',
  components: {
Button 
  },
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
    .showBtn {
        display: none;
    }
@media (max-width: 400px) {
    .showFooterContent {
        display: none;
    }
    .showBtn {
        display: block
    }

    footer {
        padding: 10px 0;
        margin: 0 25px;
    }
}

</style>