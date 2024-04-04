# AIMET Technical Frontend Mock DMIND Server

This is a mock server for the AIMET technical frontend test. It is a simple server that serves as a REST API for the frontend to interact with.

</br>

# Table of Contents

- [How to run](#how-to-run)
- [How to use](#how-to-use)

</br>

# How to run

1. Clone the repository or download the zip file and extract it.

2. Open a terminal and navigate to the root of the project.

3. Install the dependencies

   ```bash
   pnpm install
   ```

4. Run the server on port 8080

   ```bash
   pnpm start
   ```

5. The server should now be running and you can access it at `http://localhost:8080`

</br>

# How to use

The server has 3 endpoints:

## 1. GET `/api/start`

Endpoint for starting the session and get the `session_id`.

The moment you call this endpoint, the **AI will start processing** for severity level.

The `session_id` is needed for the other endpoint.
So make sure to call this endpoint once before calling other endpoint.

### Response

1. Success (**200**)

   ```json
   {
    "message": "success",
    "data": {
        "session_id": string // "c0a6e7fa-e402-4cbc-80a8-18927bddee53"
    }
   }
   ```

## 2. GET `/api/result/:session_id`

Endpoint for getting the severity level of this session from AI.

When calling this endpoint there are 2 possible things that can happen:

- If the AI is still **processing** for severity level, the `result_ai_status` response from this endpoint will be `PROCESSING`, the `result_ai_severity_level` will be `null`

- If the AI is **done** processing for severity level, the `result_ai_status` response from this endpoint will be `FINISHED`, the `result_ai_severity_level` will be either `LOW`, or `SEVERE`

You will be guaranteed to get the severity level result from the AI after **12 seconds** (of calling `/api/start`)

#### Note: All the data will be CLEARED after the server is stopped

### Response

1. Success (Processing) (**200**)

   ```json
   {
     "message": "success",
     "data": {
       "result_ai_status": "PROCESSING",
       "result_ai_severity_level": null
     }
   }
   ```

2. Success (Finished) (**200**)

   ```json
   {
     "message": "success",
     "data": {
       "result_ai_status": "FINISHED",
       "result_ai_severity_level": "SEVERE" // or "LOW"
     }
   }
   ```

3. Session id is not valid (not come from `/api/start`) (**500**)

   ```json
   {
     "message": "Session ID not found"
   }
   ```

## 3. POST `/api/feedback/:session_id`

Endpoint for submitting the feedback from user.

### Request JSON Body (Required)

feedback from user in string and cannot be empty

```json
{
   "feedback": string // "The AI is very helpful"
}
```

### Response

1. Success (**200**)

   ```json
   {
     "message": "successfully submit feedback"
   }
   ```

2. Session id is not valid (not come from `/api/start`) (**500**)

   ```json
   {
     "message": "Session ID not found"
   }
   ```

3. Feedback is empty - (**400 Bad Request**)

   ```json
   {
     "message": "feedback is required"
   }
   ```
