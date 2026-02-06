---
published: true
layout: post
title: IT4043E - Big data storage and processing
categories:
  - Course
share: true
---
## Teaching Schedule

| Week | Content                                                                       |
| ---- | ----------------------------------------------------------------------------- |
| 1    | Chapter 1: Overview of Big Data Storage and Processing                        |
| 2    | Chapter 2: The Hadoop Ecosystem                                               |
| 3    | Chapter 8: Big Data Architecture + Introduction to the Capstone Project       |
| 4    | Chapter 3: Hadoop Distributed File System (HDFS)                              |
| 5    | Chapter 4: NoSQL Storage – Part 1                                             |
| 6    | Chapter 4: NoSQL Storage – Part 2                                             |
| 7    | Chapter 4: NoSQL Storage – Part 3                                             |
| 8    | Chapter 5: Distributed Messaging Systems                                      |
| 9    | Chapter 6: Big Data Processing Techniques – Spark                             |
| 10   | Chapter 6: Big Data Processing Techniques – Spark (Part 2)                    |
| 11   | Chapter 7: Big Data Stream Processing Techniques – Spark Structured Streaming |
| 12   | Chapter 9: Big Data Analytics                                                 |
| 13   | Capstone Project Presentations                                                |
| 14   | Capstone Project Presentations                                                |
| 15   | Capstone Project Presentations                                                |
| 16   | Course Wrap-Up                                                                |

This schedule covers 16 weeks, with the main content spread across the first 12 weeks and the last 3 weeks dedicated to capstone project presentations.

## References

1. Tiwari, Shashank. Professional NoSQL. John Wiley & Sons, 2011.
2. Lam, Chuck. Hadoop in action. Manning Publications Co., 2010.
3. Miner, Donald, and Adam Shook. MapReduce design patterns: building effective algorithms and analytics for Hadoop and other systems. " O'Reilly Media, Inc.", 2012.
4. Karau, Holden. Fast Data Processing with Spark. Packt Publishing Ltd, 2013.
5. Penchikala, Srini. Big data processing with apache spark. Lulu. com, 2018.
6. White, Tom. Hadoop: The definitive guide. " O'Reilly Media, Inc.", 2012.
7. Gandomi, Amir, and Murtaza Haider. "Beyond the hype: Big data concepts, methods, and analytics." International Journal of Information Management 35.2 (2015): 137-144.
8. Cattell, Rick. "Scalable SQL and NoSQL data stores." Acm Sigmod Record 39.4 (2011): 12-27.
9. Gessert, Felix, et al. "NoSQL database systems: a survey and decision guidance." Computer Science-Research and Development 32.3-4 (2017): 353-365.
10. George, Lars. HBase: the definitive guide: random access to your planet-size data. " O'Reilly Media, Inc.", 2011.
11. Sivasubramanian, Swaminathan. "Amazon dynamoDB: a seamlessly scalable non-relational database service." Proceedings of the 2012 ACM SIGMOD International Conference on Management of Data. ACM, 2012.
12. Chan, L. "Presto: Interacting with petabytes of data at Facebook." (2013).
13. Garg, Nishant. Apache Kafka. Packt Publishing Ltd, 2013.
14. Karau, Holden, et al. Learning spark: lightning-fast big data analysis. " O'Reilly Media, Inc.", 2015.
15. Iqbal, Muhammad Hussain, and Tariq Rahim Soomro. "Big data analysis: Apache storm perspective." International journal of computer trends and technology 19.1 (2015): 9-14.
16. Toshniwal, Ankit, et al. "Storm@ twitter." Proceedings of the 2014 ACM SIGMOD international conference on Management of data. ACM, 2014.
17. Lin, Jimmy. "The lambda and the kappa." IEEE Internet Computing 21.5 (2017): 60-66.

## Lecture Materials

[Gdrive folder](https://drive.google.com/drive/folders/1vlxnuG3RAnOcNy2rEjkVsYcvs6TLh7gR?usp=sharing)

[Lab on Gdrive](https://drive.google.com/drive/folders/1-5jVMVIb-t8lRdFLS4nqdZuQFb-Tw4KF?usp=sharing)

[Lab on github](https://github.com/trungtv/IT4931_data_management_and_processing_lab_materials)

# Guidelines for Milestone Project - Course on Big Data Storage and Processing

## I. Objectives and General Requirements

The milestone project requires students to build a complete big data processing system, applying learned knowledge to solve a real-world problem. Students must implement one of the two popular architectural models: **Lambda Architecture** or **Kappa Architecture**, focusing on building an **end-to-end data pipeline** covering data ingestion, processing, storage, and result visualization.

### Technical Requirements

The project must use the following core technologies:

* **Apache Spark** for data processing (PySpark or Scala)
* **Distributed storage system** (HDFS or equivalent)
* **Message queue system** (Apache Kafka, RabbitMQ, etc.)
* **NoSQL database**
* **Deployment environment**: Kubernetes or Cloud (Docker is not encouraged because Kubernetes is closer to production environments)

### Data Processing Requirements with Spark

Students need to demonstrate **intermediate-level Spark skills** by applying diverse transformations and actions.
If Spark is not used, but another equivalent framework is applied, the architecture must be clearly explained, with a comparison of strengths and weaknesses relative to Spark.

1. **Complex Aggregations**

   * Window functions and advanced aggregation functions
   * Pivot and unpivot operations
   * Custom aggregation functions

2. **Advanced Transformations**

   * Multiple stages of transformations
   * Chaining complex operations
   * Custom UDFs for specific business logic

3. **Join Operations**

   * Broadcast joins for unbalanced datasets
   * Sort-merge joins for large-scale data
   * Multiple joins optimization

4. **Performance Optimization**

   * Partition pruning and bucketing
   * Caching and persistence strategies
   * Query optimization and execution plans

5. **Streaming Processing**

   * Structured Streaming with various output modes
   * Watermarking and late data handling
   * State management in streaming
   * Exactly-once processing guarantees

6. **Advanced Analytics**

   * Machine learning with Spark MLlib
   * Graph processing with GraphFrames
   * Statistical computations
   * Time series analysis

## II. Report Requirements

### 1. Problem Definition

* Selected problem
* Analysis of the problem's suitability for big data
* Scope and limitations of the project

### 2. Architecture and Design

* Overall architecture (Lambda/Kappa)
* Detailed components and their roles
* Data flow and component interaction diagrams

### 3. Implementation Details

* Source code with full documentation
* Environment-specific configuration files
* Deployment strategy
* Monitoring setup

### 4. Lessons Learned

#### Template for each lesson:

```
### Lesson X: [Lesson Title]

#### Problem Description
- Context and background
- Challenges encountered
- System impact

#### Approaches Tried
- Approach 1: ...
- Approach 2: ...
- Trade-offs of each approach

#### Final Solution
- Detailed solution
- Implementation details
- Metrics and results

#### Key Takeaways
- Technical insights
- Best practices
- Recommendations
```

#### Categories of lessons to be covered:

1. **Lessons on Data Ingestion**

   * Handling multiple diverse data sources
   * Ensuring data quality
   * Handling late-arriving data
   * Managing duplicates and data versioning

2. **Lessons on Data Processing with Spark**

   * Optimizing Spark jobs
   * Memory management
   * Partition tuning
   * Cost-based optimization

3. **Lessons on Stream Processing**

   * Exactly-once processing
   * Windowing strategies
   * State management
   * Recovery mechanisms

4. **Lessons on Data Storage**

   * Choosing storage formats
   * Partitioning strategies
   * Compression techniques
   * Handling hot/cold data

5. **Lessons on System Integration**

   * Service discovery
   * Error handling
   * Circuit breaker pattern
   * Load balancing

6. **Lessons on Performance Optimization**

   * Caching strategies
   * Query optimization
   * Resource allocation
   * Bottleneck identification

7. **Lessons on Monitoring & Debugging**

   * Metrics collection
   * Alert configuration
   * Log aggregation
   * Root cause analysis

8. **Lessons on Scaling**

   * Horizontal vs vertical scaling
   * Auto-scaling policies
   * Resource planning
   * Cost optimization

9. **Lessons on Data Quality & Testing**

   * Data validation
   * Unit testing
   * Integration testing
   * Performance testing

10. **Lessons on Security & Governance**

    * Access control
    * Data encryption
    * Audit logging
    * Compliance requirements

11. **Lessons on Fault Tolerance**

    * Failure recovery
    * Data replication
    * Backup strategies
    * Disaster recovery
