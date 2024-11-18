---
published: true
layout: post
title: IT4931 - Lưu trữ và xử lý dữ liệu lớn
categories:
  - Course
share: true
---
## Lịch giảng dạy 

| T | Nội dung |
|---|----------|
| 1 | **Chương 1: Tổng quan về lưu trữ và xử lý dữ liệu lớn**
| 2 | **Chương 2: Hệ sinh thái Hadoop**
| 3 | **Chương 8: Kiến trúc dữ liệu lớn + Giới thiệu bài tập lớn**
| 4 | **Chương 3: Hệ thống tệp phân tán Hadoop (HDFS)**
| 5 | **Chương 4: Cơ sở dữ liệu quan hệ NoSQL - phần 1**
| 6 | **Chương 4: Cơ sở dữ liệu quan hệ NoSQL - phần 2**
| 7 | **Chương 4: Cơ sở dữ liệu quan hệ NoSQL - phần 3**
| 8 | **Chương 5: Hệ thống nhắn tin phân tán**
| 9 | **Chương 6: Kỹ thuật xử lý dữ liệu lớn - Spark**
| 10 | **Chương 6: Kỹ thuật xử lý dữ liệu lớn - Spark phần 2**
| 11 | **Chương 7: Kỹ thuật xử lý luồng dữ liệu lớn - Spark structured streaming**
| 12 | **Chương 9: Phân tích dữ liệu lớn**
| 13 | Thuyết trình dự án tổng hợp |
| 14 | Thuyết trình dự án tổng hợp |
| 15 | Thuyết trình dự án tổng hợp |
| 16 | Tổng kết |


This schedule covers 15 weeks, with the main content spread across the first 12 weeks and the last 3 weeks dedicated to capstone project presentations. Is there anything you'd like me to modify or explain further about this schedule?
## Tài liệu tham khảo

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
 
## Nội dung bài giảng
[Gdrive folder](https://drive.google.com/drive/folders/1vlxnuG3RAnOcNy2rEjkVsYcvs6TLh7gR?usp=sharing)

[Lab on Gdrive](https://drive.google.com/drive/folders/1-5jVMVIb-t8lRdFLS4nqdZuQFb-Tw4KF?usp=sharing)

[Lab on github](https://github.com/trungtv/IT4931_data_management_and_processing_lab_materials)


# Hướng dẫn thực hiện Milestone Project - Môn Lưu trữ và Xử lý Dữ liệu Lớn

## I. Mục tiêu và Yêu cầu Chung

Milestone project yêu cầu sinh viên xây dựng một hệ thống xử lý dữ liệu lớn hoàn chỉnh, áp dụng kiến thức đã học để giải quyết một bài toán thực tế. Sinh viên cần triển khai một trong hai mô hình kiến trúc phổ biến là Lambda Architecture hoặc Kappa Architecture, tập trung vào việc xây dựng pipeline xử lý dữ liệu end-to-end từ việc thu thập, xử lý đến lưu trữ và trực quan hóa kết quả.

### Yêu cầu kỹ thuật
Project yêu cầu sử dụng các công nghệ core bao gồm:
- Apache Spark cho xử lý dữ liệu (PySpark hoặc Scala)
- Hệ thống lưu trữ phân tán (HDFS hoặc tương đương)
- Message queue system (Apache Kafka, RabbitMQ,...)
- NoSQL database 
- Môi trường triển khai: k8s hoặc cloud (Không khuyến khích docker vì k8s gần với môi trường production hơn)

### Yêu cầu về xử lý dữ liệu với Spark
Sinh viên cần thể hiện khả năng sử dụng Spark ở mức độ intermediate thông qua việc áp dụng đa dạng các transformation và action. Nếu không sử dụng spark mà sử dụng các framework tương đương thì cần trình bày rõ kiến trúc xử lý, ưu nhược điểm của framework này so sánh tương quan với spark.  


1. **Complex Aggregations**
   - Window functions và các hàm aggregation phức tạp
   - Pivot và unpivot operations
   - Custom aggregation functions

2. **Advanced Transformations**
   - Multiple stages của transformations
   - Chain các operations phức tạp
   - Custom UDFs cho business logic đặc thù

3. **Join Operations**
   - Broadcast joins cho các dataset không cân bằng
   - Sort-merge joins cho large-scale data
   - Multiple joins optimization

4. **Performance Optimization**
   - Partition pruning và bucketing
   - Caching và persistence strategies
   - Query optimization và execution plans

5. **Streaming Processing**
   - Structured Streaming với various output modes
   - Watermarking và late data handling
   - State management trong streaming
   - Exactly-once processing guarantees

6. **Advanced Analytics**
   - Machine learning với Spark MLlib
   - Graph processing với GraphFrames
   - Statistical computations
   - Time series analysis

## II. Yêu cầu Nội dung Báo cáo

### 1. Đặt vấn đề
- Bài toán được lựa chọn
- Phân tích tính phù hợp của bài toán với big data
- Phạm vi và giới hạn của project

### 2. Kiến trúc và Thiết kế
- Kiến trúc tổng thể (Lambda/Kappa)
- Chi tiết từng component và vai trò
- Data flow và component interaction diagrams

### 3. Chi tiết triển khai
- Source code với documentation đầy đủ
- Configuration files theo môi trường
- Deployment strategy
- Monitoring setup

### 4. Bài học kinh nghiệm

#### Template cho mỗi kinh nghiệm:
```
### Kinh nghiệm X: [Tên kinh nghiệm]

#### Mô tả vấn đề
- Context và background
- Thách thức gặp phải
- Impact với hệ thống

#### Các giải pháp đã thử
- Approach 1: ...
- Approach 2: ...
- Trade-offs của mỗi approach

#### Giải pháp cuối cùng
- Chi tiết giải pháp
- Implementation details
- Metrics và results

#### Bài học rút ra
- Technical insights
- Best practices
- Recommendations
```

#### Các nhóm kinh nghiệm cần cover:

1. **Kinh nghiệm về Data Ingestion**
   - Xử lý nhiều nguồn dữ liệu đa dạng
   - Đảm bảo data quality
   - Xử lý late arriving data
   - Handle duplicates và data versioning

2. **Kinh nghiệm về Data Processing với Spark**
   - Tối ưu Spark jobs
   - Memory management
   - Partition tuning
   - Cost-based optimization

3. **Kinh nghiệm về Stream Processing**
   - Exactly-once processing
   - Windowing strategies
   - State management
   - Recovery mechanism

4. **Kinh nghiệm về Data Storage**
   - Storage format selection
   - Partitioning strategy
   - Compression techniques
   - Hot/cold data handling

5. **Kinh nghiệm về System Integration**
   - Service discovery
   - Error handling
   - Circuit breaker pattern
   - Load balancing

6. **Kinh nghiệm về Performance Optimization**
   - Caching strategies
   - Query optimization
   - Resource allocation
   - Bottleneck identification

7. **Kinh nghiệm về Monitoring & Debugging**
   - Metrics collection
   - Alert configuration
   - Log aggregation
   - Root cause analysis

8. **Kinh nghiệm về Scaling**
   - Horizontal vs vertical scaling
   - Auto-scaling policies
   - Resource planning
   - Cost optimization

9. **Kinh nghiệm về Data Quality & Testing**
   - Data validation
   - Unit testing
   - Integration testing
   - Performance testing

10. **Kinh nghiệm về Security & Governance**
    - Access control
    - Data encryption
    - Audit logging
    - Compliance requirements

11. **Kinh nghiệm về Fault Tolerance**
    - Failure recovery
    - Data replication
    - Backup strategies
    - Disaster recovery
