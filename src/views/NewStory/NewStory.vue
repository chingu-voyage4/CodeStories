<template>
  <div class="content">
    <HeaderBar></HeaderBar>
    <br/><br/><br/>
    <v-container grid-list-md>
      <v-form @submit.prevent="handleStoryPublish">
        <v-layout row wrap>
          <v-flex md9 sm12 xs12>
            <v-card>
              <v-container>
                <v-text-field
                  v-model="storyTitle"
                  type="text"
                  placeholder="Title"
                  required
                ></v-text-field>
                <Editor
                  :text="story"
                  :options="editor.options"
                  @edit="handleStoryWrite"
                  class="story-editor"
                ></Editor>
                <br /><br /><br />
              </v-container>
            </v-card>
          </v-flex>
          <v-flex md3 sm12 xs12>
            <v-card>
              <v-container>
                <v-select
                  label="Category"
                  :items="category.options"
                  v-model="category.selected"
                  tags
                  chips
                  multiple
                  autocomplete
                  max-height="400"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      close
                      @input="data.parent.selectItem(data.item)"
                      :selected="data.selected"
                      class="chip--select-multi"
                      :key="JSON.stringify(data.item)"
                    > {{ data.item }} </v-chip>
                  </template>
                </v-select>
                <v-select
                  label="Tags"
                  :items="tag.options"
                  v-model="tag.selected"
                  multiple
                  tags
                  chips
                  max-height="400"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      close
                      @input="data.parent.selectItem(data.item)"
                      :selected="data.selected"
                      class="chip--select-multi"
                      :key="JSON.stringify(data.item)"
                    > {{ data.item }} </v-chip>
                  </template>
                </v-select>
                <v-card v-if="coverPhotoURL">
                  <v-card-media :src="coverPhotoURL" height="200px">
                  </v-card-media>
                </v-card>
                <input type="file" id="upload_photo" @change="handleUploadCoverPhoto" style="visibility: hidden"/>
                <v-btn color="secondary" block raised @click="triggerUploadPhoto">
                  <v-icon>cloud_upload</v-icon> &nbsp;Upload a cover photo
                </v-btn>
                <v-btn color="info" block raised>
                  <v-icon>save</v-icon> &nbsp;Save as draft
                </v-btn>
                <v-btn type="submit" color="success" block raised>
                  <v-icon>send</v-icon> &nbsp;Publish
                </v-btn>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
  </div>
</template>

<script src="./newStory.js"></script>
<style lang="stylus">
  @import './newStory.styl';
</style>
