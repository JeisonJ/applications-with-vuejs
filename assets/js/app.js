
// Component header
Vue.component('game-header', {
  template: `
    <section class="hero has-text-centered is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Video Games</h1>
        </div>
      </div>
    </section>
  `
})


// Component add
Vue.component('game-add', {
  template: `
    <div class="field">
      <label for="" class="label">New game</label>
      <div class="control">
        <input v-model="titleGame" type="text" class="input" placeholder="Metal Gear Solid V">
      </div>
      <div class="control mt-1">
        <button @click="emitNewGame" class="button">Añadir</button>
      </div>
    </div>
  `,
  data: function () {
    return {
      titleGame: null
    }
  },
  methods: {
    emitNewGame: function () {
      if (this.titleGame) {
        this.$emit('new', { title: this.titleGame })
        this.titleGame = null
      }
    }
  }
})


Vue.component('game-list', {
  props: ['games'],
  template: `
    <ul>
      <game-item v-for="item in games" :game="item" :key="item.id"></game-item>
    </ul>
  `
})


Vue.component('game-item', {
  props: ['game'],
  template: `
    <li class="mb-1">
      <article class="message">
        <div class="message-body" v-text="game.title"></div>
      </article>
    </li>
  `
})


const app = new Vue({
  el: '#app',
  template: `
    <div class="view">
      <game-header></game-header>
      <section class="section has-background-dark">
        <div class="container">
          <div class="columns has-mobile">
            <div class="column">
              <game-add @new="addGame" class="mt-2"></game-add>
            </div>
            <div class="column">
              <game-list :games="games"></game-list>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  data: {
    games: [
      { title: 'Me: Andromeda' },
      { title: 'Battelfield 4' },
      { title: 'Fallow 3' },
      { title: 'FarCry 3' },
    ]
  },
  methods: {
    addGame: function (game) {
      this.games.push(game)
    }
  }
})