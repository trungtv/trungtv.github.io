---
published: true
layout: post
title: >-
  IT4931 - Lưu trữ và xử lý dữ liệu lớn (IT4045 - Big data storage and
  processing)
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
| 5 | **Chương 4: Cơ sở dữ liệu phi quan hệ NoSQL - phần 1**
| 6 | **Chương 4: Cơ sở dữ liệu phi quan hệ NoSQL - phần 2**
| 7 | **Chương 4: Cơ sở dữ liệu phi quan hệ NoSQL - phần 3**
| 8 | **Chương 5: Hệ thống truyền thông điệp phân tán**
| 9 | **Chương 6: Kỹ thuật xử lý dữ liệu lớn - Spark**
| 10 | **Chương 6: Kỹ thuật xử lý dữ liệu lớn - Spark phần 2**
| 11 | **Chương 7: Kỹ thuật xử lý luồng dữ liệu lớn - Spark structured streaming**
| 12 | **Chương 9: Phân tích dữ liệu lớn**
| 13 | Thuyết trình dự án tổng hợp |
| 14 | Thuyết trình dự án tổng hợp |
| 15 | Thuyết trình dự án tổng hợp |
| 16 | Tổng kết |

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


# Hướng dẫn bài tập lớn - Môn Lưu trữ và xử lý dữ liệu lớn

## I. Mục tiêu và yêu cầu chung

Bài tập lớn yêu cầu sinh viên xây dựng một hệ thống xử lý dữ liệu lớn hoàn chỉnh, vận dụng kiến thức đã học để giải quyết bài toán thực tế. Sinh viên phải triển khai một trong hai mô hình kiến trúc phổ biến: **Kiến trúc Lambda** hoặc **Kiến trúc Kappa**, tập trung xây dựng **pipeline dữ liệu end-to-end** bao gồm thu thập dữ liệu, xử lý, lưu trữ và trực quan hóa kết quả.

### Yêu cầu kỹ thuật

Dự án phải sử dụng các công nghệ cốt lõi sau:

* **Apache Spark** cho xử lý dữ liệu (PySpark hoặc Scala)
* **Hệ thống lưu trữ phân tán** (HDFS hoặc tương đương)
* **Hệ thống hàng đợi tin nhắn** (Apache Kafka, RabbitMQ, v.v.)
* **Cơ sở dữ liệu NoSQL**
* **Môi trường triển khai**: Kubernetes hoặc Cloud (không khuyến khích Docker vì Kubernetes gần với môi trường production hơn)

### Yêu cầu xử lý dữ liệu với Spark

Sinh viên cần thể hiện **kỹ năng Spark mức trung cấp** thông qua các phép biến đổi và hành động đa dạng.
Nếu không dùng Spark mà dùng framework tương đương khác, cần giải thích rõ kiến trúc và so sánh ưu nhược điểm so với Spark.

1. **Tổng hợp phức tạp**

   * Hàm cửa sổ và hàm tổng hợp nâng cao
   * Thao tác pivot và unpivot
   * Hàm tổng hợp tùy biến

2. **Biến đổi nâng cao**

   * Nhiều giai đoạn biến đổi
   * Chuỗi thao tác phức tạp
   * UDF tùy biến cho logic nghiệp vụ

3. **Thao tác Join**

   * Broadcast join cho tập dữ liệu không cân bằng
   * Sort-merge join cho dữ liệu quy mô lớn
   * Tối ưu nhiều join

4. **Tối ưu hiệu năng**

   * Partition pruning và bucketing
   * Chiến lược cache và persistence
   * Tối ưu truy vấn và kế hoạch thực thi

5. **Xử lý luồng (Streaming)**

   * Structured Streaming với các chế độ output
   * Watermarking và xử lý dữ liệu đến trễ
   * Quản lý state trong streaming
   * Đảm bảo xử lý exactly-once

6. **Phân tích nâng cao**

   * Học máy với Spark MLlib
   * Xử lý đồ thị với GraphFrames
   * Tính toán thống kê
   * Phân tích chuỗi thời gian

## II. Yêu cầu báo cáo

### 1. Định nghĩa bài toán

* Bài toán lựa chọn
* Phân tích mức độ phù hợp của bài toán với dữ liệu lớn
* Phạm vi và giới hạn của dự án

### 2. Kiến trúc và thiết kế

* Kiến trúc tổng thể (Lambda/Kappa)
* Các thành phần chi tiết và vai trò
* Sơ đồ luồng dữ liệu và tương tác giữa các thành phần

### 3. Chi tiết triển khai

* Mã nguồn kèm tài liệu đầy đủ
* File cấu hình theo môi trường
* Chiến lược triển khai
* Thiết lập giám sát

### 4. Bài học kinh nghiệm (Lessons Learned)

#### Mẫu cho mỗi bài học:

```
### Bài học X: [Tiêu đề]

#### Mô tả vấn đề
- Bối cảnh và nền tảng
- Thách thức gặp phải
- Tác động đến hệ thống

#### Cách tiếp cận đã thử
- Cách 1: ...
- Cách 2: ...
- Đánh đổi của từng cách

#### Giải pháp cuối cùng
- Giải pháp chi tiết
- Chi tiết triển khai
- Chỉ số và kết quả

#### Điểm rút ra
- Hiểu biết kỹ thuật
- Thực hành tốt
- Đề xuất
```

#### Các nhóm bài học cần có:

1. **Bài học về Thu thập dữ liệu**

   * Xử lý nhiều nguồn dữ liệu đa dạng
   * Đảm bảo chất lượng dữ liệu
   * Xử lý dữ liệu đến trễ
   * Quản lý trùng lặp và phiên bản dữ liệu

2. **Bài học về Xử lý dữ liệu với Spark**

   * Tối ưu job Spark
   * Quản lý bộ nhớ
   * Điều chỉnh partition
   * Tối ưu dựa trên chi phí

3. **Bài học về Xử lý luồng**

   * Xử lý exactly-once
   * Chiến lược cửa sổ
   * Quản lý state
   * Cơ chế phục hồi

4. **Bài học về Lưu trữ dữ liệu**

   * Lựa chọn định dạng lưu trữ
   * Chiến lược phân vùng
   * Kỹ thuật nén
   * Xử lý dữ liệu nóng/lạnh

5. **Bài học về Tích hợp hệ thống**

   * Service discovery
   * Xử lý lỗi
   * Mẫu circuit breaker
   * Cân bằng tải

6. **Bài học về Tối ưu hiệu năng**

   * Chiến lược cache
   * Tối ưu truy vấn
   * Phân bổ tài nguyên
   * Xác định điểm nghẽn

7. **Bài học về Giám sát & Gỡ lỗi**

   * Thu thập metrics
   * Cấu hình cảnh báo
   * Tổng hợp log
   * Phân tích nguyên nhân gốc

8. **Bài học về Mở rộng (Scaling)**

   * Mở rộng ngang và dọc
   * Chính sách auto-scaling
   * Kế hoạch tài nguyên
   * Tối ưu chi phí

9. **Bài học về Chất lượng dữ liệu & Kiểm thử**

   * Kiểm tra dữ liệu
   * Kiểm thử đơn vị
   * Kiểm thử tích hợp
   * Kiểm thử hiệu năng

10. **Bài học về Bảo mật & Quản trị**

    * Kiểm soát truy cập
    * Mã hóa dữ liệu
    * Audit log
    * Yêu cầu tuân thủ

11. **Bài học về Chịu lỗi**

    * Phục hồi sau sự cố
    * Nhân bản dữ liệu
    * Chiến lược backup
    * Khôi phục thảm họa


