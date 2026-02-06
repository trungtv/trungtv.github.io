---
published: true
layout: post
title: IT4043E - Big data storage and processing
categories:
  - Course
share: true
---

## Teaching Schedule

| Week | Content |
|:----:|---------|
| 1 | **Chapter 1:** Overview of Big Data Storage and Processing |
| 2 | **Chapter 2:** The Hadoop Ecosystem |
| 3 | **Chapter 8:** Big Data Architecture + Introduction to the Capstone Project |
| 4 | **Chapter 3:** Hadoop Distributed File System (HDFS) |
| 5 | **Chapter 4:** NoSQL Storage — Part 1 |
| 6 | **Chapter 4:** NoSQL Storage — Part 2 |
| 7 | **Chapter 4:** NoSQL Storage — Part 3 |
| 8 | **Chapter 5:** Distributed Messaging Systems |
| 9 | **Chapter 6:** Big Data Processing Techniques — Spark |
| 10 | **Chapter 6:** Big Data Processing Techniques — Spark (Part 2) |
| 11 | **Chapter 7:** Big Data Stream Processing — Spark Structured Streaming |
| 12 | **Chapter 9:** Big Data Analytics |
| 13–15 | Capstone Project Presentations |
| 16 | Course Wrap-Up |

This schedule covers 16 weeks: main content in weeks 1–12, with the last three weeks dedicated to capstone project presentations.

---

## References

1. Tiwari, Shashank. *Professional NoSQL*. John Wiley & Sons, 2011.
2. Lam, Chuck. *Hadoop in Action*. Manning Publications Co., 2010.
3. Miner, Donald, and Adam Shook. *MapReduce Design Patterns: Building Effective Algorithms and Analytics for Hadoop and Other Systems*. O'Reilly Media, Inc., 2012.
4. Karau, Holden. *Fast Data Processing with Spark*. Packt Publishing Ltd, 2013.
5. Penchikala, Srini. *Big Data Processing with Apache Spark*. Lulu.com, 2018.
6. White, Tom. *Hadoop: The Definitive Guide*. O'Reilly Media, Inc., 2012.
7. Gandomi, Amir, and Murtaza Haider. "Beyond the hype: Big data concepts, methods, and analytics." *International Journal of Information Management* 35.2 (2015): 137–144.
8. Cattell, Rick. "Scalable SQL and NoSQL data stores." *ACM SIGMOD Record* 39.4 (2011): 12–27.
9. Gessert, Felix, et al. "NoSQL database systems: a survey and decision guidance." *Computer Science—Research and Development* 32.3–4 (2017): 353–365.
10. George, Lars. *HBase: The Definitive Guide*. O'Reilly Media, Inc., 2011.
11. Sivasubramanian, Swaminathan. "Amazon DynamoDB: a seamlessly scalable non-relational database service." *Proceedings of the 2012 ACM SIGMOD International Conference on Management of Data*. ACM, 2012.
12. Chan, L. "Presto: Interacting with petabytes of data at Facebook." (2013).
13. Garg, Nishant. *Apache Kafka*. Packt Publishing Ltd, 2013.
14. Karau, Holden, et al. *Learning Spark: Lightning-Fast Big Data Analysis*. O'Reilly Media, Inc., 2015.
15. Iqbal, Muhammad Hussain, and Tariq Rahim Soomro. "Big data analysis: Apache Storm perspective." *International Journal of Computer Trends and Technology* 19.1 (2015): 9–14.
16. Toshniwal, Ankit, et al. "Storm@Twitter." *Proceedings of the 2014 ACM SIGMOD International Conference on Management of Data*. ACM, 2014.
17. Lin, Jimmy. "The lambda and the kappa." *IEEE Internet Computing* 21.5 (2017): 60–66.

---

## Lecture Materials

- **Slides / Lectures:** [Google Drive](https://drive.google.com/drive/folders/1vlxnuG3RAnOcNy2rEjkVsYcvs6TLh7gR?usp=sharing)
- **Lab (Google Drive):** [Google Drive](https://drive.google.com/drive/folders/1-5jVMVIb-t8lRdFLS4nqdZuQFb-Tw4KF?usp=sharing)
- **Lab (source code):** [GitHub](https://github.com/trungtv/IT4931_data_management_and_processing_lab_materials)

---

# Guidelines for Milestone Project

## I. Objectives and General Requirements

The milestone project requires students to build a **complete big data processing system**, applying learned knowledge to solve a real-world problem. Students must implement one of two architectural models: **Lambda Architecture** or **Kappa Architecture**, and build an **end-to-end data pipeline** (ingestion → processing → storage → visualization).

### Technical Requirements

| Component | Technology |
|-----------|------------|
| Data processing | **Apache Spark** (PySpark or Scala) |
| Distributed storage | **HDFS** or equivalent |
| Message queue | **Apache Kafka**, RabbitMQ, etc. |
| Database | **NoSQL** |
| Deployment | **Kubernetes** or Cloud *(Docker alone is not encouraged)* |

### Data Processing Requirements with Spark

Students must demonstrate **intermediate-level Spark skills** through diverse transformations and actions. If using an equivalent framework instead of Spark, the architecture must be clearly explained and compared (strengths and weaknesses) to Spark.

#### 1. Complex Aggregations

- Window functions and advanced aggregation functions  
- Pivot and unpivot operations  
- Custom aggregation functions  

#### 2. Advanced Transformations

- Multiple stages of transformations  
- Chaining complex operations  
- Custom UDFs for business logic  

#### 3. Join Operations

- Broadcast joins (unbalanced datasets)  
- Sort-merge joins (large-scale data)  
- Multiple-join optimization  

#### 4. Performance Optimization

- Partition pruning and bucketing  
- Caching and persistence strategies  
- Query optimization and execution plans  

#### 5. Streaming Processing

- Structured Streaming, various output modes  
- Watermarking and late data handling  
- State management; exactly-once guarantees  

#### 6. Advanced Analytics

- Machine learning (Spark MLlib)  
- Graph processing (GraphFrames)  
- Statistical computations, time series analysis  

---

## II. Report Requirements

### 1. Problem Definition

- Selected problem  
- Analysis of suitability for big data  
- Scope and limitations  

### 2. Architecture and Design

- Overall architecture (Lambda/Kappa)  
- Components and their roles  
- Data flow and component interaction diagrams  

### 3. Implementation Details

- Source code with documentation  
- Environment-specific configuration  
- Deployment strategy and monitoring setup  

### 4. Lessons Learned

Use the following structure for each lesson:

```text
### Lesson X: [Lesson Title]

#### Problem Description
- Context and background
- Challenges encountered
- System impact

#### Approaches Tried
- Approach 1 / Approach 2 / ...
- Trade-offs of each approach

#### Final Solution
- Detailed solution, implementation, metrics and results

#### Key Takeaways
- Technical insights, best practices, recommendations
```

**Categories of lessons to be covered:**

1. **Data Ingestion** — Multiple diverse sources; data quality; late-arriving data; duplicates and versioning  
2. **Data Processing with Spark** — Job optimization; memory management; partition tuning; cost-based optimization  
3. **Stream Processing** — Exactly-once; windowing; state management; recovery  
4. **Data Storage** — Storage formats; partitioning; compression; hot/cold data  
5. **System Integration** — Service discovery; error handling; circuit breaker; load balancing  
6. **Performance Optimization** — Caching; query optimization; resource allocation; bottlenecks  
7. **Monitoring & Debugging** — Metrics; alerts; log aggregation; root cause analysis  
8. **Scaling** — Horizontal vs vertical; auto-scaling; resource planning; cost optimization  
9. **Data Quality & Testing** — Validation; unit/integration/performance testing  
10. **Security & Governance** — Access control; encryption; audit logging; compliance  
11. **Fault Tolerance** — Failure recovery; replication; backup; disaster recovery  
