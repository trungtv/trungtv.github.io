---
published: true
layout: post
title: IT3290E - Database Lab
categories:
  - Course
share: true
---
## IT3290E Database Lab  
*Thực hành Cơ sở dữ liệu*

- **Credits:** 2
- **Prerequisite:** IT3010(E) or IT3011(E) — Data Structures and Algorithms
- **Preliminary course:** IT3292(E) — Cơ sở dữ liệu (Database)
- **Language of instruction:** English (IT3290E)
- **Semester:** 4

---

**Objectives:** This course provides hands-on skills with relational databases and how DBMSs work in practice: using SQL, database design, indexing, writing and optimizing queries, and choosing strategies for transaction management. It also develops teamwork, critical thinking, and problem-solving through exercises, group discussion, and project work.

*Mục tiêu:* Sử dụng thành thạo SQL, thiết kế CSDL và chỉ mục, tối ưu truy vấn, quản trị giao dịch; rèn kỹ năng làm việc nhóm và phản biện qua bài tập và dự án.

---

## Learning outcomes (CLOs)

| Code | Outcome |
|------|---------|
| **CLO1** | Use a DBMS to manage a relational database |
| **CLO2** | Design a relational database for an IT application |
| **CLO3** | Understand DBMS mechanisms and use tools to optimize database performance |
| **CLO4** | Demonstrate critical thinking |
| **CLO5** | Work effectively in a team |

---

## Schedule (course content)

| Week | Content |
|:----:|---------|
| 1 | Environment preparation and DBMS implementation |
| 2 | Understanding a sample database (e.g. Dellstore2); CREATE and ALTER TABLE |
| 3 | Basic SELECT statement (project, filter, sort) |
| 4 | Advanced SQL (multi-table, JOINs) |
| 5 | Present project ideas |
| 6 | Aggregate functions and GROUP BY |
| 7 | Nested queries (subqueries) |
| 8 | Mid-term assessment / DB design presentation for project |
| 9 | Functions (string, date, time) |
| 10 | DB connection (ODBC, JDBC) |
| 11 | Transaction management |
| 12 | Performance monitoring and tuning |
| 13 | Review |
| 14–15 | Capstone project / Project presentation |

---

## Capstone project (Bài tập lớn)

The capstone has **3 submission phases** and **1 defense session**. Complete them in order and meet each requirement below.

---

### Phase 1: Problem description and system requirements

**Submit:**

- **Problem description:** Domain (application area), main entities to manage, core business processes.
- **System requirements:** Required functions, data to store, business constraints (if any).

**Requirement:** The description must be clear and form the basis for the DB design in Phase 2 and the queries in Phase 3.

---

### Phase 2: Database schema design

**Tasks:**

- Based on the **problem and system requirements** from Phase 1, design the **database schema** (tables, primary keys, foreign keys, constraints).

**Submit:**

- ERD (or equivalent): list of tables, columns, and relationships.
- Optionally include CREATE TABLE script (MySQL/MariaDB or the DBMS used in the course).

**Requirement:** The schema must match the problem and requirements from Phase 1. This schema is shared by the group and used in Phase 3 and the defense.

---

### Phase 3: Final report — 20 queries

**Tasks:**

- **Each student** (in the group) writes **20 queries** on the **group’s designed schema**.
- Queries must be **diverse:** basic SELECT, WHERE, JOIN, GROUP BY, aggregate functions, subqueries, etc.
- **Prefer** queries that **reflect real use** of the problem (business logic, lookups, reports).

**Submit:**

- Final report with **20 queries** (short description per query + SQL).
- Include a `.sql` file and (if available) sample run results for verification.

**Requirement:** All queries must **run** on a database that implements the schema submitted in Phase 2.

---

### Defense — Individual assessment

- After the **group presentation** (problem, schema, system/query demo), **each student** is assessed individually.
- Each student must **write 3 queries** **related to the 20 queries** in the report (e.g. variants, extra conditions, or queries of similar level on the same schema).
- The instructor gives requirements orally (e.g. “List … under condition …”, “Summarize … by …”); the student writes SQL on the **group’s schema**, may refer to the 20 submitted queries but **must not copy them verbatim** for these 3.

**Note:** This part confirms that each student understands the schema and can write queries. Students should know the 20 queries and the group schema well so they can write related queries during the defense.

---

### Summary

| Phase | What to do | Submit |
|-------|------------|--------|
| **1** | Problem description and system requirements | Written document |
| **2** | DB schema design from Phase 1 | ERD + (optional) CREATE TABLE script |
| **3** | Each student: 20 diverse, realistic queries on group schema | Final report + 20 queries (+ .sql file) |
| **Defense** | Group presentation; each student writes 3 queries related to the 20 | Presentation + on-site writing |

*Submission deadlines and format are announced by the instructor on the LMS.*

---

## Learning materials

- **Course materials:** [Google Drive folder](https://drive.google.com/drive/folders/0B8a305L6HNbwblZCQjNuLUxaNjg?usp=sharing)
- **Reference:** Garcia-Molina, H., Ullman, J. D., Widom, J. *Database Systems: The Complete Book* (2nd ed.). Prentice Hall, 2008.
