# cs333-EstressLess

CS333 Final Project Plan

Name: Mya Oakes
Project name: EstressLess
GitHub repo link:

Part 1: What it is and who it's for
What is your app? What will it do?
Who will use it? What do they want to get done when they open it?

My app will help students stay organized and keep track of assignments. It sorts homework, assignments, exams by due date or by class. It can be filtered for each class. There will also be completed statuses for each assignment so students can be sure they did not miss anything. Students in high school or college balancing multiple classes would use it. They can check off assignments they have completed or add new assignments. 

Part 2: What can people do with it?

*Add a new assignment with title, class name, and due date/time
*View all assignments by soonest due date
*Filter assignments by a specific class
Check completed assignments off
Color code classes

Part 3: Pages

Upcoming assignments page: shows all the assignments, has a filter to change whether by due date or by class, a toggle to show or hide completed assignments.
Form page: where the student can add an assignment. The form would have fields for title, class, due date, priority, notes.


Part 4: Your data
Collection 1: courses
name (string, required)
color (string, optional - hex code for color coding classes)
Collection 2: assignments
title (string, required)
courseId (ObjectId referencing courses, required)
dueDate (date, required)
completed (Boolean, defaults to false)
notes (string, optional)


Part 5: Your routes

GET /api/courses - returns all courses and their colors
POST /api/courses - creates a new course
GET /api/courses - returns all assignments sorted by soonest dueDate
POST /api/assignments - creates a new assignment linked to a courseId
PATCH /api/assignments/:id - updates an assignments fields or marks it complete
DELETE /api/assignments/:id - deletes an assignment

Part 6: Tools

I’ll use Javascript’s built in date object and the native HTML <input type="date"> element for picking deadlines. If I have time I may use lucide for react for better icons in my app. I may also use react-datepicker to have a calendar pop up for easier picking of assignment due dates. 
https://lucide.dev/guide/react/ 
https://reactdatepicker.com/ 


Part 7: Plan by week

Week 7: hello version of app
Week 8: Users can fill out working form to add a new assignment (via POST /api/assignments) and see it on the page
Week 9: Automatic sorting by due date and classes
Week 10: Full edit, delete, and completion toggle (PATCH and DELETE routes) 
Finals week: Final UI polish and testing

Part 8: The hard part
What part are you most worried about? If it doesn't work out, what is your smaller backup version?

Keeping the React UI properly updated when a user edits a due date, checks off an assignment, or changes filters. If there’s problems with the filtering I will re-fetch the sorted assignment list directly from GET /api/assignments after every add/edit/delete action so the database stays the single source of truth. 



