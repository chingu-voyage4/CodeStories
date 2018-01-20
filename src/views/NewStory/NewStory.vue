<template>
  <div class="content">
    <HeaderBar></HeaderBar>
    <br/><br/><br/>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md9 sm-12 xs-12>
          <v-card>
            <v-container>
              <v-text-field
                placeholder="Title"
                autofocus
              ></v-text-field>
              <Editor
                :text="editor.story"
                :options="editor.options"
                @edit="handleStoryWrite"
                class="story-editor"
              ></Editor>
              <br /><br /><br />
            </v-container>
          </v-card>
        </v-flex>
        <v-flex md3 sm-12 xs-12>
          <v-card>
            <v-container>
              <v-select
                label="Category"
                :items="category.options"
                v-model="category.selected"
                multiple
                autocomplete
                max-height="400"
              ></v-select>
              <v-select
                label="Tags"
                :items="tag.options"
                v-model="tag.selected"
                multiple
                max-height="400"
              ></v-select>
              <!-- Cover photo goes here -->
              <v-btn color="secondary" block raised>
                <v-icon>cloud_upload</v-icon> &nbsp;Upload a cover photo
              </v-btn>
              <v-btn color="info" block raised>
                <v-icon>save</v-icon> &nbsp;Save as draft
              </v-btn>
              <v-btn color="success" block raised>
                <v-icon>send</v-icon> &nbsp;Publish
              </v-btn>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script src="./newStory.js"></script>
<style lang="stylus">
  @import './newStory.styl';
</style>
