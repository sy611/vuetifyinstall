const ComponentHeader = {
  template: `
            <div>
              <h1 id="title" class="text--cat font-productsans">
                Cat<img id="catImage" src="https://storage.googleapis.com/catindev/static/image/Cat_Orange256.png">
              </h1>
              <div id="titleSub">
                <p id="titleSubLeft">
                  <img id="titleSubImg" :src="subimg">
                  {{ titlesubname }}
                </p>
                <p id="titleSubRight">incident reporting tool via GAS</p>
              </div>
            </div>
            `,
  props: ['subimg', 'titlesubname']
}


const TextAnime = {
  template: `
    <div class="TextAnime1">
      <img id="subimg" :src="subimg">
      <span 
        id="titlesubtext"
        v-for="(t, index) in text"
        :key="index"
        class="item"
        :style="{animationDelay: index*150+'ms'}"
        v-text="t"
        />
    </div>
  `,
  props: ['subimg', 'text']
}