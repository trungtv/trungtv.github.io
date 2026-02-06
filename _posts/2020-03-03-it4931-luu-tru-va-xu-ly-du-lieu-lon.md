---
published: true
layout: post
title: IT4931 - Lưu trữ và xử lý dữ liệu lớn
categories:
  - Course
share: true
---

## Lịch giảng dạy

| Tuần | Nội dung |
|:----:|----------|
| 1 | **Chương 1:** Tổng quan về lưu trữ và xử lý dữ liệu lớn |
| 2 | **Chương 2:** Hệ sinh thái Hadoop |
| 3 | **Chương 8:** Kiến trúc dữ liệu lớn + Giới thiệu bài tập lớn |
| 4 | **Chương 3:** Hệ thống tệp phân tán Hadoop (HDFS) |
| 5 | **Chương 4:** Cơ sở dữ liệu phi quan hệ NoSQL — phần 1 |
| 6 | **Chương 4:** Cơ sở dữ liệu phi quan hệ NoSQL — phần 2 |
| 7 | **Chương 4:** Cơ sở dữ liệu phi quan hệ NoSQL — phần 3 |
| 8 | **Chương 5:** Hệ thống truyền thông điệp phân tán |
| 9 | **Chương 6:** Kỹ thuật xử lý dữ liệu lớn — Spark |
| 10 | **Chương 6:** Kỹ thuật xử lý dữ liệu lớn — Spark phần 2 |
| 11 | **Chương 7:** Kỹ thuật xử lý luồng dữ liệu lớn — Spark Structured Streaming |
| 12 | **Chương 9:** Phân tích dữ liệu lớn |
| 13–15 | Thuyết trình dự án tổng hợp |
| 16 | Tổng kết |

---

## Tài liệu tham khảo

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

## Nội dung bài giảng

- **Slide / Bài giảng:** [Google Drive](https://drive.google.com/drive/folders/1vlxnuG3RAnOcNy2rEjkVsYcvs6TLh7gR?usp=sharing)
- **Lab (Gdrive):** [Google Drive](https://drive.google.com/drive/folders/1-5jVMVIb-t8lRdFLS4nqdZuQFb-Tw4KF?usp=sharing)
- **Lab (mã nguồn):** [GitHub](https://github.com/trungtv/IT4931_data_management_and_processing_lab_materials)

---

# Hướng dẫn bài tập lớn

## I. Mục tiêu và yêu cầu chung

Bài tập lớn yêu cầu sinh viên xây dựng một **hệ thống xử lý dữ liệu lớn hoàn chỉnh**, vận dụng kiến thức đã học để giải quyết bài toán thực tế. Sinh viên phải triển khai một trong hai mô hình kiến trúc: **Kiến trúc Lambda** hoặc **Kiến trúc Kappa**, tập trung xây dựng **pipeline dữ liệu end-to-end** (thu thập → xử lý → lưu trữ → trực quan hóa).

### Yêu cầu kỹ thuật

| Thành phần | Công nghệ |
|------------|-----------|
| Xử lý dữ liệu | **Apache Spark** (PySpark hoặc Scala) |
| Lưu trữ phân tán | **HDFS** hoặc tương đương |
| Hàng đợi tin nhắn | **Apache Kafka**, RabbitMQ, v.v. |
| Cơ sở dữ liệu | **NoSQL** |
| Triển khai | **Kubernetes** hoặc Cloud *(không khuyến khích chỉ dùng Docker)* |

### Yêu cầu xử lý dữ liệu với Spark

Sinh viên cần thể hiện **kỹ năng Spark mức trung cấp** qua các phép biến đổi và hành động đa dạng. Nếu dùng framework tương đương thay Spark, cần giải thích kiến trúc và so sánh ưu/nhược điểm với Spark.

#### 1. Tổng hợp phức tạp

- Hàm cửa sổ và hàm tổng hợp nâng cao  
- Thao tác pivot và unpivot  
- Hàm tổng hợp tùy biến  

#### 2. Biến đổi nâng cao

- Nhiều giai đoạn biến đổi  
- Chuỗi thao tác phức tạp  
- UDF tùy biến cho logic nghiệp vụ  

#### 3. Thao tác Join

- Broadcast join (tập dữ liệu không cân bằng)  
- Sort-merge join (dữ liệu quy mô lớn)  
- Tối ưu nhiều join  

#### 4. Tối ưu hiệu năng

- Partition pruning và bucketing  
- Chiến lược cache và persistence  
- Tối ưu truy vấn và kế hoạch thực thi  

#### 5. Xử lý luồng (Streaming)

- Structured Streaming, các chế độ output  
- Watermarking và xử lý dữ liệu đến trễ  
- Quản lý state; đảm bảo exactly-once  

#### 6. Phân tích nâng cao

- Học máy (Spark MLlib)  
- Đồ thị (GraphFrames)  
- Thống kê, chuỗi thời gian  

---

## II. Yêu cầu báo cáo

### 1. Định nghĩa bài toán

- Bài toán lựa chọn  
- Phân tích mức độ phù hợp với dữ liệu lớn  
- Phạm vi và giới hạn dự án  

### 2. Kiến trúc và thiết kế

- Kiến trúc tổng thể (Lambda/Kappa)  
- Các thành phần và vai trò  
- Sơ đồ luồng dữ liệu và tương tác giữa các thành phần  

### 3. Chi tiết triển khai

- Mã nguồn kèm tài liệu  
- File cấu hình theo môi trường  
- Chiến lược triển khai và thiết lập giám sát  

### 4. Bài học kinh nghiệm (Lessons Learned)

Với mỗi bài học, báo cáo theo mẫu:

```text
### Bài học X: [Tiêu đề]

#### Mô tả vấn đề
- Bối cảnh và nền tảng
- Thách thức gặp phải
- Tác động đến hệ thống

#### Cách tiếp cận đã thử
- Cách 1 / Cách 2 / ...
- Đánh đổi của từng cách

#### Giải pháp cuối cùng
- Giải pháp chi tiết, triển khai, chỉ số và kết quả

#### Điểm rút ra
- Hiểu biết kỹ thuật, thực hành tốt, đề xuất
```

**Các nhóm bài học cần có:**

1. **Thu thập dữ liệu** — Nhiều nguồn đa dạng; chất lượng dữ liệu; dữ liệu đến trễ; trùng lặp và phiên bản  
2. **Xử lý dữ liệu với Spark** — Tối ưu job; quản lý bộ nhớ; partition; tối ưu theo chi phí  
3. **Xử lý luồng** — Exactly-once; cửa sổ; state; phục hồi  
4. **Lưu trữ dữ liệu** — Định dạng lưu trữ; phân vùng; nén; dữ liệu nóng/lạnh  
5. **Tích hợp hệ thống** — Service discovery; xử lý lỗi; circuit breaker; cân bằng tải  
6. **Tối ưu hiệu năng** — Cache; truy vấn; phân bổ tài nguyên; điểm nghẽn  
7. **Giám sát & gỡ lỗi** — Metrics; cảnh báo; log; phân tích nguyên nhân gốc  
8. **Mở rộng (Scaling)** — Ngang/dọc; auto-scaling; kế hoạch tài nguyên; chi phí  
9. **Chất lượng dữ liệu & kiểm thử** — Kiểm tra dữ liệu; unit/integration/performance testing  
10. **Bảo mật & quản trị** — Truy cập; mã hóa; audit log; tuân thủ  
11. **Chịu lỗi** — Phục hồi; nhân bản; backup; khôi phục thảm họa  
