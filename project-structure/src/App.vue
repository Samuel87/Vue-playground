<template>
    <div>
        <div class="nav">
            <router-link tag="li" class="nav__item" :to="{ name: 'todo' }">
                <a>Todos</a>
            </router-link>
        </div>

        <router-view></router-view>

        <img src='./assets/images/logo.png'>
    </div>
</template>

<script>

export default {
    data() {
        return {};
    }
};
</script>
