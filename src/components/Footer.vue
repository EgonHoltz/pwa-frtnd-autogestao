<template>
    <footer>
        <div class ="footer-content">
            <div id="footer-icons">
                <a href="https://github.com/EgonHoltz"><div class="footer-rounded-img" id="github-img"></div></a>
                <a href="https://www.linkedin.com/in/egonholtz/"><div class="footer-rounded-img" id="linkedin-img"></div></a>
            </div>
            <p class="copy">Copyright &copy; {{year}}</p>
        </div>
    </footer>
</template>

<script>
import {computed} from 'vue'
export default {
    data: () => {
        return {
            year : null
        };
    },
    setup(){
        const year = computed(() => new Date().getFullYear())
        return {year} 
    }
}
</script>

<style>
#github-img{
  margin-right: 0.1em;
}
#linkedin-img{
  margin-right: 0.1em;
}
footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 2rem; 
	margin: 0 auto;
	color: white;
	z-index: 999;
}
.footer-content{
    background-color: #00001a;
    color: white;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 0px;
}
.copy{
    font-size: 0.9em;
    font-family: "Open Sans Condensed", sans-serif;
    color: gray;
}
footer a{
    margin: 0;
	font-family: "Open Sans Condensed", sans-serif;
	font-size: 1.2em;
    color: white;
    display: inline-flex;
    margin-left: 1rem;
    font-style: none;
    text-decoration: none !important;
}
footer a:hover{
    color: rgb(97, 96, 96);
}
.footer-rounded-img {
  display: inline-block;
  width: 3em;
  height: 3em;  
  background-position: 50% 50%;
  background-size: cover;
  background-repeat:no-repeat;
  border-radius: 50%;
}
#footer-icons{
    padding: 0.35em;
}
</style>