<template>
  <v-container fluid>
    <v-form ref="form">
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Title"
            v-model="title"
            append-icon="mdi-pencil"
            filled
            shaped
            :rules="titleRules"
            background-color="#a2bdf2"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            name="input-7-1"
            label="Content"
            v-model="body"
            append-icon="mdi-pencil"
            filled
            shaped
            :rules="bodyRules"
            background-color="#a2bdf2"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-btn class="mx-2" rounded dark color="indigo" @click="save">Save</v-btn>
          <v-btn class="mx-2" rounded dark color="red" @click="back">Back</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Note',
  data() {
    return {
      editTitle: false,
      editBody: false,
      title: '',
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length >= 3) || 'Title must be at least 3 characters',
      ],
      body: '',
      bodyRules: [
        v => !!v || 'Content is required',
        v => (v && v.length >= 5) || 'Content must be at least 5 characters',
      ],
    };
  },
  computed: {
    ...mapState('notes', {
      note: state => state.note,
    }),
  },
  created() {
    if (this.$route.params.id !== '0') {
      this.getNote(this.$route.params.id).then(() => {
        this.title = this.note.title;
        this.body = this.note.body;
      });
    }
  },

  methods: {
    ...mapActions('notes', ['getNote', 'update', 'create']),
    save() {
      const { body, title } = this;
      // eslint-disable-next-line no-underscore-dangle
      const note = { id: this.note._id, body, title };
      if (this.$refs.form.validate()) {
        if (this.$route.params.id === '0') {
          this.create(note).then(() => this.back());
        } else {
          this.update(note).then(() => this.back());
        }
      }
    },

    back() {
      this.$router.push('/');
    },
  },

  destroyed() {
    this.$destroy();
  },
};
</script>
