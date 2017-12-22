<template lang="pug">
  #app
    .container
      .title.m-t-20.m-b-40
        .pull-left.height-100
          img.m-r-20(src="./assets/wheel-w.png", height="100")
        .pull-left.height-100
          span.text-lg.vertical-align-middle.line-height-100 //support.wheel(of: <strong>:_fate</strong>)
        .clearfix
      <router-view/>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
  
  .row.equal {
    display: flex;
    flex-wrap: wrap;
  }

  body{
    background-color: rgb(0, 135, 255);
    color: white;
    font-family: "Source Sans Pro";
    font-weight: 300;
    font-size: 20px;
  }

  button.bau-btn:hover{
    background-color: white;
    color: rgb(0, 135, 255);    
  }
  button.bau-btn{
    outline: none;
    background-color: transparent;
    border: 2px solid white;
    border-radius: .55rem;
    font-weight: 400;
    padding: 5px;
  }

  a, a:focus{
    color: white;
    border-bottom: 1px solid white;
    text-decoration: none;
  }

  a:hover{
    color: white;
    border-bottom: none;
    text-decoration: none;
  }

  .invert{
    background-color: white;
    color: rgb(0, 135, 255);
  }

  hr{
    border-style: dashed;
  }

  .pointer{
    cursor: pointer;
  }
  .width-80{
    width: 80px;
  }
  .height-100{
    height: 100px;
  }
  .height-fill{
    height: 100%;
  }
  .line-height-100{
    line-height: 100px;
  }
  .center-block{
    margin: auto;
  }
  .center-text{
    text-align: center;
  }
  .text-lg{
    font-size: 30px;
  }
  .text-xlg{
    font-size: 60px;
  }
  .vertical-align-middle{
    vertical-align: middle;
  }

  .m-r-20{
    margin-right: 20px;
  }

  .m-r-5{
    margin-right: 5px;
  }
  .m-b-5{
    margin-bottom: 5px;
  }

  .m-t-20{
    margin-top: 20px;
  }
  .m-b-20{
    margin-bottom: 20px;
  }
  .m-t-50{
    margin-top: 50px;
  }
  .m-b-50{
    margin-bottom: 50px;
  }
  .m-b-40{
    margin-bottom: 40px;
  }

  .p-5{
    padding: 5px;
  }
  .p-t-5{
    padding-top: 5px;
  }

  .border-2{
    border: 2px solid white;
  }

  .border-dotted{
    border-style: dotted;
  }

  .border-radius-85{
    border-radius: .85rem;
  }

  .position-absolute{
    position: absolute;
  }

  .top-50p{
    top: 50%;
  }

  .bottom-0{
    bottom: 0;
  }
  .left-0{
    left: 0;
  }

  .position-relative{
    position: relative;
  }

  .inline-block{
    display: inline-block;
  }

  @media (max-width: 768px) {
    .xs-m-b-20{
      margin-bottom: 20px;
    }
  }
</style>
