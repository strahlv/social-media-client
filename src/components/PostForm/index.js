import React from "react";
import { useDispatch } from "react-redux";
import useForm from "../../hooks/useForm";
import { createPost } from "../../slices/postsSlice";
import { SecondaryButton } from "../Button";
import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";

const PostForm = () => {
  const dispatch = useDispatch();

  const [{ formValues, setFormValues, isLoading }, handleChange, handleSubmit] =
    useForm();

  const handleCreatePost = () => {
    const newPost = { ...formValues };
    newPost.tags = newPost.tags?.split(" ");
    dispatch(createPost(newPost));
    setFormValues({ title: "", body: "", tags: "" });
  };

  return (
    <Form onSubmit={handleSubmit(handleCreatePost)}>
      <Input
        type="text"
        name="title"
        id="title"
        labelText="Title"
        required
        onChange={handleChange}
        value={formValues.title}
        autoComplete="off"
      />
      <TextArea
        name="body"
        id="body"
        required
        onChange={handleChange}
        value={formValues.body}
      />
      <Input
        type="text"
        name="tags"
        id="tags"
        labelText="Tags"
        onChange={handleChange}
        value={formValues.tags}
        autoComplete="off"
      />
      <SecondaryButton type="submit" disabled={isLoading} stretch>
        Post
      </SecondaryButton>
    </Form>
  );
};

export default PostForm;
