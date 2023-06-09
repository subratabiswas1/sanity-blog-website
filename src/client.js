import client from '@sanity/client';

export default client(
    {
    projectId:"9kznl7bg",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-06-09",
    }
)