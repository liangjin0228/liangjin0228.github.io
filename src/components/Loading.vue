<template>
  <v-overlay
    class="d-flex justify-center align-center loading-overlay"
    :model-value="loading"
    style="background-color: #1d2630"
  >
    <div class="spinner-box">
      <div class="configure-border-1">
        <div class="configure-core" />
      </div>
      <div class="configure-border-2">
        <div class="configure-core" />
      </div>
    </div>
  </v-overlay>
</template>

<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        required: true,
        default: true,
      },
    },
  }
</script>

<style scoped>
.spinner-box {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
}

.configure-core {
    width: 100%;
    height: 100%;
    background-color: #1d2630;
}

.configure-border-1 {
    width: 115px;
    height: 115px;
    padding: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fb5b53;
    animation: configure-clockwise 3s ease-in-out 0s infinite alternate;
}

.configure-border-2 {
    width: 115px;
    height: 115px;
    padding: 3px;
    left: -115px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(63, 249, 220);
    transform: rotate(45deg);
    animation: configure-xclockwise 3s ease-in-out 0s infinite alternate;
}

@keyframes configure-clockwise {
    0% {
        transform: rotate(0);
    }

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes configure-xclockwise {
    0% {
        transform: rotate(45deg);
    }

    25% {
        transform: rotate(-45deg);
    }

    50% {
        transform: rotate(-135deg);
    }

    75% {
        transform: rotate(-225deg);
    }

    100% {
        transform: rotate(-315deg);
    }
}
</style>
