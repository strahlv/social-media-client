import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { createPost } from "../../slices/postsSlice";
import { SecondaryButton } from "../Button";
import Form from "../Form";
import Input from "../Input";
import TextArea from "../TextArea";

const StyledForm = styled(Form)`
  margin-bottom: 5rem;
`;

const PostForm = () => {
  const dispatch = useDispatch();

  const [{ formValues, isLoading }, handleChange, handleSubmit] = useForm();

  const handleCreatePost = () => {
    const newPost = { ...formValues };
    newPost.tags = newPost.tags?.split(" ");
    dispatch(createPost(newPost));
    // setFormValues({ title: "", body: "", tags: "" });
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleCreatePost)}>
      <Input
        type="text"
        name="title"
        id="title"
        labelText="Title"
        required
        onChange={handleChange}
        value={formValues.title}
        autoComplete="off"
        variant="title"
        placeholder="What's on your mind?"
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
        placeholder="separate tags by space no hashtags needed"
      />
      <SecondaryButton type="submit" disabled={isLoading} stretch>
        Post
      </SecondaryButton>
    </StyledForm>
  );
};

export default PostForm;
