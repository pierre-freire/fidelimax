"use client";

const BASE_URL = 'https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test'

export async function getAllQuestions() {
  try {
    const response = await fetch(`${BASE_URL}/survey.json`, { method: 'GET',  headers: {
      'Accept': 'application/json',
  }, })

    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error: ', error)
  }
}

export async function fakePost(req: { 	content: string;
	typeQuestion: number;
	answerValue: string;
	mandatory?: boolean;
	horizontal?: boolean;
	itens: [{ description: string; value: number }] }[]) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req)
    })
  
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error: ', error)
    return error
  }
}

export async function getError() {
  try {
    const response = await fetch(`${BASE_URL}/survey-post-error.json`, { method: 'GET' })

    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error: ', error)
  }
}

export async function getSuccess() {
  try {
    const response = await fetch(`${BASE_URL}/survey-post-success.json`, { method: 'GET' })

    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error: ', error)
  }
}