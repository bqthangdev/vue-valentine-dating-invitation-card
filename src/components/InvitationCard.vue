<script setup lang="ts">
import { ref } from 'vue';
import img1 from "../assets/giphy1.gif";
import img2 from "../assets/giphy2.gif";
import img3 from "../assets/giphy3.gif";
import img4 from "../assets/giphy4.gif";

const btnYes = ref(null);
const btnNo = ref(null);
let acceptDialog = ref(false);
let imgGif = ref(img3);

const trickyMouseOver = () => {
    btnNo.value.style.left = (Math.random()*90)+"%";
    btnNo.value.style.top = (Math.random()*90)+"%";

    imgGif.value = img1;
}

const staticMouseOver = () => {
    imgGif.value = img2;
}

const btnWrapHover = () => {

}

const trickyTouchStart = () => {

}

const showAcceptDialog = () => {
    acceptDialog.value = true;
}
</script>

<template>
    <div class="wrapper">
        <h1 class="text-3xl font-bold underline" style="margin-top: 5rem;">Làm người yêu anh nhé?</h1>

        <div class="img-box">
            <img :src="imgGif" width="10%" />
        </div>

        <div class="btn-wrap static" ref="btnYes" @mouseover="staticMouseOver">
            <a class="btn" title="Yes" @click.prevent="showAcceptDialog">
                <span>Đồng ý</span>
            </a>
        </div>

        <div class="btn-wrap tricky" ref="btnNo" @mouseover="trickyMouseOver">
            <a href="#" class="btn" title="No">
                <span></span>
            </a>
        </div>
    </div>

    <Dialog v-model:visible="acceptDialog" :closable="true" modal header="Yahoo!!!!" :style="{ width: '40rem' }">
        <!-- <span class="p-text-secondary block mb-5">Nice</span> -->
        <div class="img-box">
            <img :src="img4" width="100%" />
        </div>
        <!-- <div class="flex justify-content-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="acceptDialog.value = false"></Button>
            <Button type="button" label="Save" @click="acceptDialog.value = false"></Button>
        </div> -->
    </Dialog>
</template>

<style scoped lang="scss">
@mixin vertical-align {
    position: relative;
    top: 40%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

body {
    font-family: sans-serif;
    margin: 0;
}

h1 {
    color: #fff;
    font-size: 36px;
    font-weight: normal;
    text-align: center;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.wrapper {
    background: #e87add;
    background: -moz-linear-gradient(top, #3741d0 0%, #332180 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e917e9), color-stop(100%, #f0a7f7));
    background: -webkit-linear-gradient(top, #3741d0 0%, #332180 100%);
    background: -o-linear-gradient(top, #3741d0 0%, #332180 100%);
    background: -ms-linear-gradient(top, #3741d0 0%, #332180 100%);
    background: linear-gradient(to bottom, #f5a3e9 0%, #f386f1 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3741d0', endColorstr='#332180', GradientType=0);
    height: 100vh;
    padding-top: 12px;
    position: relative;

    @media (min-width: 600px) {
        padding-top: 24px;
    }
}

.btn-wrap {
    display: block;
    margin: 2em auto;
    transition: all 0.75s ease;
    position: relative;
    height: 100px;
    width: 100px;

    &:before {
        content: '';
        border-radius: 50%;
        box-shadow: inset 0 10px 10px rgba(0, 0, 0, 0.15);
        position: absolute;
        top: -10px;
        left: -10px;
        z-index: 2;
        width: 120px;
        height: 120px;
        transition: all 0.75s ease;
    }

    &:after {
        position: absolute;
        background: #ffcc00;
        width: 140px;
        height: 140px;
        z-index: 1;
        content: '';
        left: -20px;
        top: -20px;
        border-radius: 50%;
        border-bottom: 3px solid #ff9900;
        box-shadow: 0px 3px 2px 2px rgba(0, 0, 0, 0.15);
        transition: all 0.75s ease;
    }

    @media (min-width: 600px) {
        left: 30%;
        margin: auto;
        margin-top: -50px;
        position: absolute;
        top: 50%;
    }
}

.tricky {
    left: 65%;
    z-index: 50;

    &:after {
        background-color: #cc0000;
        border-bottom-color: #ae0000;
    }

    .btn {
        color: #fff;
        background: #cc0000;
        border-bottom: 5px solid #ae0000;

        &:hover {
            border-bottom: 3px solid #ae0000;
        }

        span {
            text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.5), 1px 1px 0px rgba(255, 100, 100, 0.5);

            &:before {
                content: 'Không';
            }
        }
    }

    &.active {
        height: 50px;
        width: 50px;

        span {
            font-size: 14px;

            &:before {
                content: 'Shh';
            }
        }

        &:before {
            box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.15);
            width: 60px;
            height: 60px;
            left: -5px;
            top: -5px;
        }

        &:after {
            box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
            left: -10px;
            top: -10px;
            width: 70px;
            height: 70px;
        }
    }
}

.btn {
    background: #ffcc00;
    border-radius: 50%;
    border-bottom: 5px solid #ffb300;
    box-shadow: 0px 4px 2px 2px rgba(0, 0, 0, 0.25);
    color: #333;
    display: block;
    font-weight: bold;
    height: 100%;
    position: absolute;
    text-align: center;
    text-decoration: none;
    transition: all 0.1s ease;
    width: 100%;
    z-index: 10;

    &:hover {
        border-bottom: 3px solid #ffb300;
        box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.3);
        margin-top: 2px;
    }

    span {
        font-size: 21px;
        line-height: 1;
        text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.6);
        text-transform: uppercase;
        transition: all 0.25s ease;
        @include vertical-align;
    }
}

.img-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>