<template >
        <div>
            <div class="circle">
            <!-- User Profile Image -->
            <img class="profile-pic" src="http://cdn.cutestpaw.com/wp-content/uploads/2012/07/l-Wittle-puppy-yawning.jpg">

            <!-- Default Image -->
            <!-- <i class="fa fa-user fa-5x"></i> -->
            </div>
            <div class="p-image">
            <i class="fa fa-camera upload-button"></i>
                <input class="file-upload" type="file" accept="image/*"/>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.profile-pic {
    max-width: 200px;
    max-height: 200px;
}

.file-upload {
    display: none;
}
.circle {
    border-radius: 1000px !important;
    overflow: hidden;
    width: 128px;
    height: 128px;
    border: 8px solid rgba(255, 255, 255, 0.7);
    top: 72px;
}
img {
    max-width: 100%;
    height: auto;
}
.p-image {
  position: absolute;
  top: 167px;
  right: 30px;
  color: #666666;
  transition: all .3s cubic-bezier(.175, .885, .32, 1.275);
}
.p-image:hover {
  transition: all .3s cubic-bezier(.175, .885, .32, 1.275);
}
.upload-button {
  font-size: 1.2em;
}

.upload-button:hover {
  transition: all .3s cubic-bezier(.175, .885, .32, 1.275);
  color: #999;
}

</style>
