'using strict'
const settings = require('../settings.json');
const API_PATH = settings.API_PATH;

const { request } = require('./utils.js');

function fetchProcesses(token){
  return request({
      url: API_PATH + settings.GET_ALL_PROCESSES,
      data: undefined,
      token: token
    }, 'get', 'no-cache');
}

function fetchProcess(token, processId) {
  return request({
    url: API_PATH + settings.GET_ONE_PROCESS + processId,
    data: undefined,
    token: token
  }, 'get', 'no-cache');
}

function createEmptyProcess(token) {
  return new Promise((resolve, reject) => {
    request({
      url: API_PATH + settings.CREATE_EMPTY_PROCESS,
      data: undefined,
      token: token,
    }, 'post').then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

function createCopyProcess(token, processId) {
  return new Promise((resolve, reject) => {
    request({
      url: API_PATH + settings.CREATE_COPY_PROCESS + processId,
      data: undefined,
      token: token
    }, 'post').then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}

function deleteProcessById(token, processId) {
  return new Promise((resolve, reject) => {
    request({
      url: API_PATH + settings.DELETE_PROCESS + processId,
      data: undefined,
      token: token
    }, 'delete').then((response) => {
      resolve(response);
    }).catch((err) => {
      reject(err);
    });
  });
}

function updateProcessById(token, processId, process) {
  return new Promise((resolve, reject) => {
    request({
      url: API_PATH + settings.GET_ONE_PROCESS + processId,
      data: process,
      token: token
    }, 'put').then((response) => {
      resolve(response);
    }).catch((err) => {
      reject(err);
    });
  });
}

function openProcessById(token, processId) {
  return new Promise((resolve, reject) => {
    request({
      url: API_PATH + settings.OPEN_PROCESS + processId,
      data: undefined,
      token: token
    }, 'put').then((response) => {
      resolve(response);
    }).catch((err) => {
      reject(err);
    });
  });
}

export default { fetchProcesses, fetchProcess, createEmptyProcess, createCopyProcess, deleteProcessById, updateProcessById, openProcessById };
