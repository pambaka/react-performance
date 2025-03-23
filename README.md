## Performance Profiling Task (with React Dev Tools Profiler)

1. **Before optimization**


Sorting triggers rerendering of the cards. Country cards are rerendered after sorting / filtering / searching (Ranked chart):

![image](https://github.com/user-attachments/assets/2fa76caf-0fb6-4077-8d0d-8ac2443bf2f7)

(Flame graph)

![image](https://github.com/user-attachments/assets/3d262f37-42a9-4e36-b3dd-de0b5e857295)



2. **After optimization (with React.memo, useMemo, useCallback)**
   
`React.memo` and `useMemo` prevent unnecessary re-renders and memoize values.
       
Interaction sequance: rendering (before fetch) -> rendering (after fetch) -> Sorting (name asc)(3) -> Sorting (population desc)(4) -> Filter (Europe)(5)

Render durations:

Before: ![image](https://github.com/user-attachments/assets/79435ecb-bc22-4eda-9fd7-4f37e7aaf40c)
After: ![image](https://github.com/user-attachments/assets/b623586d-5a4d-45e6-b5a3-b58a7ee32a60)

Rendering time after sorting / filtering (3, 4, 5) noticeably reduced.

With React.memo sorting does not trigger rerendering of the cards (3) (Ranked chart):

![image](https://github.com/user-attachments/assets/1946434e-18f1-4feb-b1c5-40fd53689f53)

(Flame graph):

![image](https://github.com/user-attachments/assets/78078b62-9d0c-4079-8c0f-3c598cf5dbdb)

After clicking on the card (add to / remove from visited countries), only one card is rerendered:

![image](https://github.com/user-attachments/assets/c1ced5b2-8108-43c3-9557-7c705d842494)



